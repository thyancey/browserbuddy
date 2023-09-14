import { useEffect, useState } from 'react';

import { LocalStorageState, PetManifestEntry, RawManifest, RawManifestItem, RawPetJSON } from '../../types';
import useLocalStorage from '../../util/hooks/useLocalStorage';
import {
  createPet,
  removeInteractionEvent,
  restoreInteractionFromSave,
  setActiveId,
  setActiveIdx,
} from '../../services/petstore';
import { AppDispatch, DEFAULT_LOCALSTORAGE_STATE } from '../../services/store';
import { useDispatch } from 'react-redux';
import { Dispatch } from '@reduxjs/toolkit';
import { log } from '../../util/tools';
import { setDebugMode } from '../../services/ui';
// import { getUrl } from '../../assets';

const fetchAllData = async (url: string, dispatch: AppDispatch, savedData: LocalStorageState) => {
  log('-------fetchAllData----------');
  const pets = await readManifest(url);
  log('fetchAllData: received pets', pets);

  const fetchedPetJson = await fetchPetFiles(pets);
  log('fetchAllData: received fetchedPetJson', fetchedPetJson);

  finishUp(fetchedPetJson, dispatch, savedData);

  log('\n\n\n');
};

const readManifest = async (url: string) => {
  log(`readManifest: reading manifest from ${url}`);
  const petsList: RawManifestItem[] = await fetchManifest(url).then((json: RawManifest) => {
    log('readManifest: fetched:', json);
    return json.pets.map((p: RawManifestItem) => ({
      id: p.id,
      baseUrl: p.baseUrl,
    }));
  });

  return petsList.filter((p) => !!p); //remove any null records from errors
};

const fetchManifest = async (url: string) => {
  try {
    const response = await fetch(url, { mode: 'cors' });
    if (!response.ok) {
      // throw `bad response`;
      return null;
    }

    const text = await response.text();
    return JSON.parse(text);
  } catch (e) {
    console.error(`Error fetching or parsing manifest from ${url}`, e);
    return null;
  }
};

const fetchPetFiles = async (petFiles: PetManifestEntry[]) => {
  const promises = [] as Promise<RawPetJSON>[];
  petFiles.forEach((pF) => promises.push(getPetPromise(pF)));
  const result = await Promise.all(promises);
  return result.filter((r) => !!r); //remove any null records from errors
};

const getPetPromise = (petFile: PetManifestEntry): Promise<RawPetJSON> => {
  return new Promise((resolve) => resolve(fetchPetFile(petFile)));
};

const fetchPetFile = async (petManifestEntry: PetManifestEntry) => {
  const url = petManifestEntry.baseUrl + '/data.json';
  try {
    const response = await fetch(url, { mode: 'cors' });
    if (!response.ok) {
      console.error(`bad response from ${url}`);
      return null;
    }
    const petJson = JSON.parse(await response.text());
    petJson.baseUrl = petManifestEntry.baseUrl;

    return petJson;
  } catch (e) {
    console.error(`Error fetching or parsing pet manifest from ${url}`, e);
    return null;
  }
};

const finishUp = (rawPetsJson: RawPetJSON[], dispatch: AppDispatch, savedData: LocalStorageState) => {
  const now = new Date().getTime();
  log(`JSON definitions parsed successfully`, rawPetsJson);
  log(`LocalStorage was read successfully`, savedData);
  let activeId = '';

  if (savedData.config.activePet) {
    activeId = savedData.config.activePet;
  }

  rawPetsJson.forEach((petDef: RawPetJSON) => {
    const savedStatus = savedData?.pets.find((p) => p.id === petDef.id) || null;
    if (!activeId && savedStatus && savedData.config.activePet === savedStatus.id) {
      activeId = savedStatus.id;
    }
    dispatch(
      createPet({
        isActive: activeId === savedStatus?.id,
        petDefinition: petDef,
        initialState: savedStatus,
      })
    );
  });

  if (activeId) {
    dispatch(setActiveId(activeId));
  } else {
    dispatch(setActiveIdx(0));
  }

  savedData.interactions
    .filter((interaction) => interaction.endAt > now)
    .forEach((interaction) => {
      dispatch((thunkDispatch: Dispatch) => {
        thunkDispatch(restoreInteractionFromSave(interaction));
        window.setTimeout(() => {
          thunkDispatch(removeInteractionEvent(interaction.id));
        }, interaction.endAt - now);
      });
    });

  // dispatch(pingStore({ time: now, doSave: true }));
};

export const Loader = () => {
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);
  const [savedData] = useLocalStorage('browserbuddy', DEFAULT_LOCALSTORAGE_STATE);

  useEffect(() => {
    if (!loaded) {
      setLoaded(true);

      if (window.location.search.indexOf('debug') > -1) {
        dispatch(setDebugMode(true));
      }

      const url = 'data/pet-manifest.json';
      fetchAllData(url, dispatch, savedData);
    }
  }, [loaded, savedData, setLoaded, dispatch]);

  return null;
};

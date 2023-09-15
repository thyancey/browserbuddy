// slightly evolving from create-react-app example
import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  PetDefinition,
  SavedPetState,
  PetLogicGroup,
  RawPetJSON,
  PetStatusDefinition,
  PetInfo,
  PetBehaviorDefinition,
  PetStatDefinitionJSON,
  StatChangeDefinition,
  PetInteractionDetail,
  LocalStorageState,
  InteractionCooldownStatus,
  DeltaStat,
  PetBehaviorJSON,
  CachedPetStat,
  PingPayload,
  WhenThenStringBooleanGroup,
  RawWhenThen,
  PetInteractionDefinitionJSON,
  PetInteractionEvent,
  RawPetStatuses,
  PetToggleDefinition,
  ActiveToggleStatus,
} from '../../types';
import { clamp, getRenderedDeltaStats, getCachedDeltaStats, log } from '../../util/tools';
import {
  evaluateAvailabilityWhenThenGroup,
  evaluateWhenThenNumberGroup,
  getFirstOfWhenThenStringGroups,
  parseInteractionWhenThenGroup,
  parseStatsWhenThenGroup,
  parseBehaviorRulesWhenThenGroup,
} from '../../util/whenthen';

import { RootState } from '../store';
import { getDebugMode } from '../ui';

const DEFAULT_LOCALSTORAGE_STATE: LocalStorageState = {
  config: {
    activePet: '',
    lastSaved: -1,
  },
  interactions: [],
  pets: [],
};

export type PetStoreState = {
  activeIdx: number;
  pets: PetDefinition[];
  interactions: InteractionCooldownStatus[];
  cachedPets: SavedPetState[];
  lastRendered: number;
  lastSaved: number;
};

export type CreatePetPayload = {
  isActive: boolean;
  petDefinition: RawPetJSON;
  initialState: SavedPetState | null;
};

const initialStoreState: PetStoreState = {
  activeIdx: -1,
  pets: [],
  interactions: [],
  cachedPets: [],
  lastRendered: new Date().getTime(),
  lastSaved: new Date().getTime(),
};

// might want to do some validation and pre-processing here
export const parseLogicGroup = (petDefJSON: RawPetJSON, initialState?: SavedPetState) => {
  return {
    stats: parseStatsGroup(petDefJSON.logic.stats, initialState),
    statuses: parseStatusesGroup(petDefJSON.logic.statuses),
    behaviorRules: parseBehaviorRulesWhenThenGroup(petDefJSON.logic.behaviorRules),
    behaviors: parsePetBehaviors(petDefJSON.logic.behaviors || [], petDefJSON.baseUrl),
    interactions: parseInteractionsGroup(petDefJSON.logic.interactions),
    toggles: parseTogglesGroup(petDefJSON.logic.toggles),
  } as PetLogicGroup;
};

export const parseTogglesGroup = (petToggles: PetToggleDefinition[]) => {
  return petToggles.map((petToggles) => ({
    id: petToggles.id,
    on: petToggles.on || '',
    off: petToggles.off || '',
    defaultOn: petToggles.defaultOn !== undefined ? petToggles.defaultOn : false,
  }));
};

export const parsePetBehaviors = (petBehaviorsJson: PetBehaviorJSON[], baseUrl: string) => {
  return petBehaviorsJson.map((pB) => ({
    ...pB,
    imageUrl: pB.image ? `${baseUrl}/${pB.image}` : pB.imageUrl || '',
    bgImageUrl: pB.backgroundImage ? `${baseUrl}/${pB.backgroundImage}` : '',
    position: pB.position ? pB.position : 'center',
    offsetX: pB.offsetX ? pB.offsetX : 0,
    offsetY: pB.offsetY ? pB.offsetY : 0,
  }));
};

// could do some validation here
export const parseStatChanges = (statChangesJSON: StatChangeDefinition[] = []) => {
  return statChangesJSON.map((sE) => ({
    statId: sE.statId,
    value: sE.value || 0,
  }));
};

export const parseInteractionAvailability = (availability: RawWhenThen[]) => {
  return availability ? parseInteractionWhenThenGroup(availability) : [];
};

export const parseInteractionsGroup = (interactions: PetInteractionDefinitionJSON[]) => {
  if (!interactions) return [];

  return interactions.map((int) => ({
    id: int.id,
    label: int.label,
    cooldown: int.cooldown,
    changeStats: parseStatChanges(int.changeStats),
    changeToggle: int.changeToggle || '',
    availability: parseInteractionAvailability(int.availability),
  }));
};

export const parseStatsGroup = (statsDef: PetStatDefinitionJSON[], initialState?: SavedPetState) => {
  return statsDef.map((pS) => {
    const foundStat = initialState?.stats.find((iS) => iS.id === pS.id);
    const statEffects = parseStatsWhenThenGroup(pS.statEffects);

    if (foundStat) {
      return {
        ...pS,
        value: foundStat.value,
        statEffects: statEffects,
      };
    } else {
      return {
        ...pS,
        statEffects: statEffects,
      };
    }
  });
};

export const parseStatusesGroup = (statuses: RawPetStatuses): PetStatusDefinition[] => {
  return Object.keys(statuses).map((key: string) => ({
    id: key,
    label: statuses[key].label || '',
    message: statuses[key].message || '',
    alertType: statuses[key].alertType,
  }));
};

export const getWasntTracked = (previous: SavedPetState[], activeIdx: number) => {
  try {
    return !previous[activeIdx].beingTracked;
  } catch (e) {
    return false;
  }
};

/*
{ toggle, status }
{ id, on, off, defaultOn }
{ string }
*/
export const getUpdatedToggles = (
  cachedToggles: ActiveToggleStatus[],
  toggleDefs: PetToggleDefinition[],
  toggleToFlip: string
) => {
  const toggleDef = toggleDefs.find((td) => td.id === toggleToFlip);
  if (!toggleDef) {
    // this shouldnt happen, just to help debug later
    console.error(`invalid toggle "${toggleToFlip}" attempted`);
    return cachedToggles;
  } else {
    const curToggleStatus = cachedToggles.find((ats) => ats.toggle === toggleToFlip) || {
      toggle: toggleToFlip,
      status: toggleDef.defaultOn ? 'on' : 'off',
    };

    // whether it was an existing one or a new one, flip it.
    curToggleStatus.status = curToggleStatus.status === 'on' ? 'off' : 'on';

    // give back the same junk, with the new toggle value
    return cachedToggles.filter(ct => ct.toggle !== toggleToFlip).concat([curToggleStatus])
  }
};

export const getUpdatedStats = (
  cachedPetStats: CachedPetStat[],
  statDefinitions: DeltaStat[],
  newStats: StatChangeDefinition[]
) => {
  const getNewValue = (cachedStat: CachedPetStat, statDefs: DeltaStat[], changeDefs: StatChangeDefinition[]) => {
    const found = changeDefs.find((cD) => cD.statId === cachedStat.id);
    if (!found) return cachedStat.value;

    const rawNew = cachedStat.value + found.value;
    const max = statDefs.find((sD) => cachedStat.id === sD.id)?.max;
    if (max) {
      return clamp(rawNew, 0, max);
    }
    return rawNew > 0 ? rawNew : 0;
  };

  return cachedPetStats.map((oldStat) => ({
    id: oldStat.id,
    value: getNewValue(oldStat, statDefinitions, newStats),
    // value: newStats.find(newStat => newStat.id === oldStat.id)?.value || oldStat.value
  }));
};

export const getNewStats = (oldStats: DeltaStat[], statChanges: StatChangeDefinition[]) => {
  return oldStats.map((stat) => {
    const toChange = statChanges.find((sChange) => sChange.statId === stat.id);
    if (toChange) {
      return {
        id: stat.id,
        value: clamp(stat.value + toChange.value, 0, stat.max),
      };
    }
    return stat;
  });
};

export const hackySave = (state: PetStoreState, explicitTime?: number) => {
  const nowTime = explicitTime !== undefined ? explicitTime : new Date().getTime();
  state.lastSaved = nowTime;
  state.lastRendered = nowTime;
};

export const petStoreSlice = createSlice({
  name: 'petStore',
  initialState: initialStoreState,
  reducers: {
    pingStore: (state: PetStoreState, action: PayloadAction<PingPayload>) => {
      const nowTime = action.payload.time;

      state.lastRendered = nowTime;
      if (action.payload.doSave) {
        // console.log('update lastSaved');
        state.lastSaved = nowTime;
      }
    },
    clearSave: () => {
      // TODO, this should be handled differently, or taken out of redux otherwise
      window.localStorage.clear();
      window.location.reload();
    },
    setActiveId: (state: PetStoreState, action: PayloadAction<string>) => {
      const petIdx = state.pets.findIndex((p: PetDefinition) => p.id === action.payload);
      if (petIdx === -1) {
        console.log(`Cannot find pet with id "${action.payload}"`);
        state.activeIdx = 0;
        hackySave(state);
      } else {
        state.activeIdx = petIdx;

        // TODO: this seems sketchy
        hackySave(state);
      }
    },
    setActiveIdx: (state: PetStoreState, action: PayloadAction<number>) => {
      state.activeIdx = action.payload;

      // TODO: this seems sketchy
      hackySave(state);
    },
    setCachedPayload: (state: PetStoreState, action: PayloadAction<LocalStorageState>) => {
      const lsState = action.payload;
      state.cachedPets = lsState.pets;
    },
    restoreInteractionFromSave: (state: PetStoreState, action: PayloadAction<InteractionCooldownStatus>) => {
      const interaction = action.payload;
      if (!state.interactions.find((iE) => iE.id === interaction.id)) {
        console.log(
          `restoreInteractionFromSave ${interaction.id} with ${
            (interaction.endAt - new Date().getTime()) / 1000
          } secs left`
        );
        state.interactions.push(interaction);
      }
    },
    addNewInteractionEvent: (state: PetStoreState, action: PayloadAction<PetInteractionEvent>) => {
      const { interaction, time } = action.payload;
      console.log('addNewInteractioNEvent', interaction);

      let doSave = false;
      // interaction has to sit a bit, so save it for later
      if (interaction.cooldown) {
        doSave = true;
        // // these are added by a user interaction
        if (!state.interactions.find((iE) => iE.id === interaction.id)) {
          state.interactions.push({
            id: interaction.id,
            startAt: time,
            endAt: time + (interaction.cooldown || 0),
          });
        }
      }

      if (interaction.changeStats.length > 0) {
        doSave = true;
        const activePet = state.pets[state.activeIdx];
        const cachedIdx = state.cachedPets.findIndex((cP) => cP.id === activePet.id);
        if (cachedIdx > -1) {
          const cachedStats = state.cachedPets[cachedIdx]?.stats || [];
          const statDefs = activePet.logic.stats;

          state.cachedPets[cachedIdx] = {
            ...state.cachedPets[cachedIdx],
            stats: getUpdatedStats(cachedStats, statDefs, interaction.changeStats),
          };
        }
      }

      if (interaction.changeToggle) {
        console.log('interaction.changeToggle: ', interaction.changeToggle);
        doSave = true;
        const activePet = state.pets[state.activeIdx];
        const cachedIdx = state.cachedPets.findIndex((cP) => cP.id === activePet.id);
        if (cachedIdx > -1) {
          const cachedToggles = state.cachedPets[cachedIdx]?.activeToggles || [];
          const toggleDefs = activePet.logic.toggles;

          const newToggles = getUpdatedToggles(cachedToggles, toggleDefs, interaction.changeToggle);

          state.cachedPets[cachedIdx] = {
            ...state.cachedPets[cachedIdx],
            activeToggles: newToggles,
          };
        }
      }

      if (doSave) {
        hackySave(state, time);
      }
    },
    removeInteractionEvent: (state: PetStoreState, action: PayloadAction<string>) => {
      const intId = action.payload;

      state.interactions = state.interactions.filter((interaction) => interaction.id !== intId);
    },
    createPet: (state: PetStoreState, action: PayloadAction<CreatePetPayload>) => {
      log('\n\ncreatePet', action.payload);
      const { petDefinition, initialState, isActive } = action.payload;
      const foundPet = state.pets.find((p) => p.id === petDefinition.id);
      const nowTime = new Date().getTime();
      const logicGroup = parseLogicGroup(petDefinition, initialState || undefined);

      log(`>> createPet: ${petDefinition.id}, isActive? ${isActive}, beingTracked? ${initialState?.beingTracked}`);
      if (!initialState) {
        log('no initial state found.');
      } else {
        log('initial state:', initialState);
      }

      const updatedDef = {
        ...petDefinition,
        logic: logicGroup,
        bornOn: initialState?.bornOn || nowTime,
        bgImage: petDefinition.backgroundImage ? `${petDefinition.baseUrl}/${petDefinition.backgroundImage}` : null,
        bgColor: petDefinition.backgroundColor || null,
      } as PetDefinition;

      if (foundPet) {
        state.pets = state.pets.map((p) => {
          if (p.id === petDefinition.id) {
            return updatedDef;
          } else {
            return p;
          }
        });
      } else {
        state.pets.push(updatedDef);
      }

      // restore it to the cache if it was saved!
      if (initialState) {
        if (!state.cachedPets.find((cP) => cP.id === initialState?.id)) {
          state.cachedPets = [
            ...state.cachedPets,
            ...[
              {
                ...initialState,
                lastSaved: initialState?.lastSaved || nowTime,
              },
            ],
          ];
        }
      }
    },
  },
});

export const {
  pingStore,
  createPet,
  setActiveIdx,
  setActiveId,
  clearSave,
  setCachedPayload,
  addNewInteractionEvent,
  restoreInteractionFromSave,
  removeInteractionEvent,
} = petStoreSlice.actions;

export const selectActiveIdx = (state: RootState): number => state.petStore.activeIdx;
export const selectPets = (state: RootState): PetDefinition[] => state.petStore.pets;
export const getActiveInteractions = (state: RootState): InteractionCooldownStatus[] => state.petStore.interactions;
export const getCachedPets = (state: RootState): SavedPetState[] => state.petStore.cachedPets;
export const getNewLastRendered = (state: RootState): number => state.petStore.lastRendered;
export const getNewLastSaved = (state: RootState): number => state.petStore.lastSaved;

export const selectLastSaved = createSelector([getNewLastSaved], (lastSaved) => lastSaved);
export const selectLastRendered = createSelector([getNewLastRendered], (lastRendered) => lastRendered);

export const selectActivePet = createSelector([selectPets, selectActiveIdx], (pets, activeIdx) => {
  return pets[activeIdx] || null;
});
export const selectActiveStatDefinitions = createSelector(
  [selectActivePet],
  (activePet) => activePet?.logic?.stats || []
);
export const selectActiveStatusDefinitions = createSelector(
  [selectActivePet],
  (activePet) => activePet?.logic?.statuses || []
);
export const selectActiveToggleDefinitions = createSelector(
  [selectActivePet],
  (activePet) => activePet?.logic?.toggles || []
);
export const selectActiveInteractionDefinitions = createSelector(
  [selectActivePet],
  (activePet) => activePet?.logic?.interactions || []
);
export const selectActiveBehaviorRuleDefinitions = createSelector(
  [selectActivePet],
  (activePet) => activePet?.logic?.behaviorRules || []
);
export const selectActiveBehaviorDefinitions = createSelector(
  [selectActivePet],
  (activePet) => activePet?.logic?.behaviors || []
);
export const selectActiveBg = createSelector([selectActivePet], (activePet) => ({
  imageUrl: activePet?.bgImage,
  backgroundColor: activePet?.bgColor,
}));

export const selectCachedPets = createSelector([getCachedPets], (cachedPets) => cachedPets);
export const selectActiveCachedPet = createSelector(
  [getCachedPets, selectActivePet],
  (cachedPets, activePet): SavedPetState | null => {
    if (!activePet) null;
    return cachedPets.find((cP) => cP.id === activePet.id) || null;
  }
);
export const selectCachedPetStats = createSelector([getCachedPets], (cachedPets) => cachedPets.map((cp) => cp.stats));

export const selectActiveCachedPetStats = createSelector(
  [selectActiveCachedPet],
  (savedPetState): CachedPetStat[] => {
    if (!savedPetState) return [];
    return savedPetState.stats || [];
  }
);
export const selectActiveCachedToggles = createSelector(
  [selectActiveCachedPet],
  (savedPetState): ActiveToggleStatus[] => {
    if (!savedPetState) return [];
    return savedPetState.activeToggles || [];
  }
);

export const selectActiveInfo = createSelector([selectActivePet], (activePet): PetInfo | null => {
  if (!activePet) return null;

  return {
    id: activePet.id,
    name: activePet.name,
    level: activePet.level,
    bio: activePet.bio,
    bornOn: activePet.bornOn,
  };
});

export const selectCooldownStatus = createSelector(
  [getActiveInteractions],
  (activeInteractions: InteractionCooldownStatus[]) => activeInteractions
);

export const selectActiveLastCached = createSelector(
  [getCachedPets, selectActivePet],
  (cachedPets, activePet): number => {
    if (!activePet) return 0;
    return cachedPets.find((cP) => cP.id === activePet.id)?.lastSaved || 0;
  }
);

export const selectRenderedDeltaStats = createSelector(
  [selectActiveStatDefinitions, selectActiveCachedPetStats, selectActiveLastCached, selectLastRendered, getDebugMode],
  (statDefinitions, cachedStats, petTime, time, debugMode) => {
    return getRenderedDeltaStats(statDefinitions, cachedStats, petTime, time, debugMode);
  }
);

export const selectActiveDeltaStatuses = createSelector(
  [selectRenderedDeltaStats, selectActiveStatDefinitions, selectActiveCachedToggles, selectActiveStatusDefinitions, selectActiveToggleDefinitions],
  (deltaStats, statDefinitions, activeToggles, statusDefs, allToggleDefs) => {
    // for each statDef, look through statDef.statEffects, which is a whenThenNumberGroup[]
    // all stats should be evaluated, and output all unique statuses matched
    const findDeltaStat = (id: string) => deltaStats.find((ds) => ds.id === id);

    // console.log('activeToggles', allToggleDefs, activeToggles, statusDefs)

    const allStatuses = [];
    for (let i = 0; i < statDefinitions.length; i++) {
      const dS = findDeltaStat(statDefinitions[i].id);
      if (!dS) continue;

      for (let j = 0; j < statDefinitions[i].statEffects.length; j++) {
        const status = evaluateWhenThenNumberGroup(statDefinitions[i].statEffects[j], dS.value, dS.max);
        if (status && allStatuses.indexOf(status) === -1) {
          allStatuses.push(status);
        }
      }
    }

    // now check toggles, toggles override whatever stats had done

    for(let i = 0; i < allToggleDefs.length; i++){
      const foundActiveToggle = activeToggles.find(tog => tog.toggle === allToggleDefs[i].id);
      let newStatus: string | undefined = '';
      if (foundActiveToggle) {
        if (foundActiveToggle.status === 'on') {
          newStatus = allToggleDefs[i].on;
        } else {
          newStatus = allToggleDefs[i].off;
        }
      } else {
        newStatus = allToggleDefs[i].defaultOn ? allToggleDefs[i].on : allToggleDefs[i].off;
      }

      if(newStatus && !allStatuses.includes(newStatus)) {
        allStatuses.push(newStatus);
      }
    }

    return allStatuses
      .map((statusId) => {
        return statusId;
      })
      .reverse();
  }
);

export const selectDetailedActiveDeltaStatuses = createSelector(
  [selectActiveDeltaStatuses, selectActiveStatusDefinitions],
  (deltaStatusIds, statusDefinitions): PetStatusDefinition[] => {
    return deltaStatusIds
      .map((dsId) => {
        return statusDefinitions.find((sD) => sD.id === dsId) as PetStatusDefinition;
      })
      .filter((e) => !!e);
  }
);

export const selectActiveBehavior = createSelector(
  [selectActiveDeltaStatuses, selectActiveBehaviorRuleDefinitions, selectActiveBehaviorDefinitions],
  (deltaStatusIds, behaviorRules, behaviorDefinitions): PetBehaviorDefinition | null => {
    const foundBehaviorId = getFirstOfWhenThenStringGroups(behaviorRules, deltaStatusIds);
    return behaviorDefinitions.find((bD) => bD.id === foundBehaviorId) || null;
  }
);

export const selectActiveInteractionDetail = createSelector(
  [selectActiveInteractionDefinitions, selectCooldownStatus, selectActiveDeltaStatuses],
  (activeInteractionDefinitions, cooldownStatuses, activeStatuses): PetInteractionDetail[] => {
    return activeInteractionDefinitions.map((iD) => {
      const cooldownStatus = cooldownStatuses.find((aI) => aI.id === iD.id);
      const isEnabled = evaluateAvailabilityWhenThenGroup(
        iD.availability as WhenThenStringBooleanGroup[],
        activeStatuses
      );
      return {
        id: iD.id,
        label: iD.label,
        startAt: cooldownStatus?.startAt || 0,
        endAt: cooldownStatus?.endAt || 0,
        enabled: isEnabled,
        definition: iD,
        cooldownStatus: cooldownStatus,
      } as PetInteractionDetail;
    });
  }
);

export const selectPetList = createSelector([selectPets, selectActiveIdx], (pets, activeIdx) =>
  pets.map((p, idx) => ({
    name: p.name,
    id: p.id,
    isActive: idx === activeIdx,
  }))
);

export const selectCachedDeltaStats = createSelector(
  [selectActiveStatDefinitions, selectActiveCachedPetStats, selectActiveLastCached, selectLastSaved, getDebugMode],
  (petStats, cachedPetStats, lastCachedTime, lastSavedTime, debugMode) => {
    if (lastCachedTime === lastSavedTime) return null;
    return getCachedDeltaStats(petStats, cachedPetStats, lastCachedTime, lastSavedTime, debugMode);
  }
);

export const getFromLocalStorage = () => {
  try {
    return JSON.parse(window.localStorage.getItem('browserbuddy') || '');
  } catch (e) {
    console.log('no localStorage entry found for "browserbuddy"');
    return null;
  }
};
export const getPetsFromLocalStorage = () => {
  try {
    return getFromLocalStorage().pets;
  } catch (e) {
    return [];
  }
};

export const selectPetsFromLocalStorage = createSelector([getPetsFromLocalStorage], (pets: SavedPetState[]) => pets);

// TODO, the beingTracked here needs to be investigated more.
export const selectNewSavePayload = createSelector(
  [selectLastSaved, selectCachedDeltaStats, selectActivePet, selectCooldownStatus, selectCachedPets],
  (lastSaved, cachedDeltaStats, activePet, activeInteractions, storedPets): LocalStorageState | null => {
    //TODO, this seems fishy
    if (!cachedDeltaStats) {
      return null;
    }

    if (!activePet) {
      return DEFAULT_LOCALSTORAGE_STATE;
    }

    const foundIdx = storedPets.findIndex((sP: SavedPetState) => sP.id === activePet.id);
    let newList = [];
    if (foundIdx > -1) {
      // this is where pet data is saved on an interval
      newList = storedPets.map((sP: SavedPetState) => {
        if (sP.id === activePet.id) {
          const curStats = sP.beingTracked ? cachedDeltaStats : sP.stats;
          // TODO, do i need to do this caching stuff like stats for toggles??

          return {
            id: activePet.id,
            stats: curStats,
            bornOn: activePet.bornOn,
            lastSaved: lastSaved,
            beingTracked: true,
            activeToggles: sP.activeToggles,
          };
        }

        return {
          ...sP,
          beingTracked: false,
        };
      });
    } else {
      // create new pet data in cookie
      newList = storedPets.concat([
        {
          id: activePet.id,
          stats: cachedDeltaStats,
          bornOn: activePet.bornOn,
          lastSaved: lastSaved,
          beingTracked: false,
          activeToggles: [],
        },
      ]);
    }

    // console.log('>> returning savedPayload', newList);

    return {
      config: {
        activePet: activePet?.id || '',
        lastSaved: lastSaved,
      },
      interactions: activeInteractions,
      pets: newList,
    };
  }
);

export default petStoreSlice.reducer;

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
  DeltaPetStat,
  PingPayload,
  WhenThenStringBooleanGroup,
  RawWhenThen,
  PetInteractionDefinitionJSON,
  PetInteractionEvent,
  RawPetStatuses,
  PetToggleDefinition,
  ActiveToggleState,
  PetToggleDefinitionJSON,
  ThemeStrings,
} from '../../types';
import { clamp, getActiveDeltaStats, log, SAVE_SCHEMA_VERSION } from '../../util/tools';
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
    schemaVersion: SAVE_SCHEMA_VERSION,
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
  deltaPets: SavedPetState[];
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
  deltaPets: [],
  lastRendered: new Date().getTime(),
  lastSaved: new Date().getTime(),
};

const parseTheme = (theme: ThemeStrings) => {
  const theseThemes: ThemeStrings = {
    'color-primary': 'var(--color-black)',
    'color-secondary': 'var(--color-blue)',
    'color-highlight': 'var(--color-white)'
  }

  theme && Object.keys(theme).forEach(themeKey => {
    theseThemes[themeKey] = theme[themeKey];
  });

  return theseThemes;
}

// might want to do some validation and pre-processing here
export const parseLogicGroup = (petDefJSON: RawPetJSON, initialState?: SavedPetState) => {
  return {
    stats: parseStatsGroup(petDefJSON.logic.stats, initialState),
    statuses: parseStatusesGroup(petDefJSON.logic.statuses, petDefJSON.baseUrl),
    behaviorRules: parseBehaviorRulesWhenThenGroup(petDefJSON.logic.behaviorRules),
    behaviors: parsePetBehaviors(petDefJSON.logic.behaviors || [], petDefJSON.baseUrl),
    interactions: parseInteractionsGroup(petDefJSON.logic.interactions),
  } as PetLogicGroup;
};

export const parsePetBehaviors = (petBehaviorsJson: PetBehaviorJSON[], baseUrl: string) => {
  return petBehaviorsJson.map((pB) => ({
    ...pB,
    type: pB.type || 'normal',
    imageUrl: pB.image ? `${baseUrl}/${pB.image}` : pB.imageUrl || '',
    bgImageUrl: pB.bgImage ? `${baseUrl}/${pB.bgImage}` : '',
    position: pB.position ? pB.position : 'center',
    offsetX: pB.offsetX ? pB.offsetX : 0,
    offsetY: pB.offsetY ? pB.offsetY : 0,
  }));
};

// could do some validation here
export const parseStatChanges = (statChangesJSON: StatChangeDefinition[] | undefined) => {
  if (!statChangesJSON) return [];
  return statChangesJSON.map((sE) => ({
    statId: sE.statId,
    value: sE.value || 0,
    type: sE.type || 'incremental',
  }));
};

export const parseInteractionAvailability = (availability: RawWhenThen[]) => {
  return availability ? parseInteractionWhenThenGroup(availability) : [];
};

export const parseInteractionToggleDefinition = (toggleDef?: PetToggleDefinitionJSON) => {
  if (!toggleDef) return null;
  return {
    defaultState: toggleDef.defaultState || 'off',
    onState: toggleDef.onState,
    offState: toggleDef.offState,
  };
};

export const parseInteractionsGroup = (interactions: PetInteractionDefinitionJSON[]) => {
  if (!interactions) return [];

  return interactions.map((int) => ({
    id: int.id,
    label: int.label,
    cooldown: int.cooldown,
    changeStats: parseStatChanges(int.changeStats),
    changeToggle: parseInteractionToggleDefinition(int.changeToggle),
    availability: parseInteractionAvailability(int.availability),
    hideWhenUnavailable: int.hideWhenUnavailable === true,
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
        displayType: pS.displayType || 'percent',
        statEffects: statEffects,
      };
    } else {
      return {
        ...pS,
        displayType: pS.displayType || 'percent',
        statEffects: statEffects,
      };
    }
  });
};

export const parseStatusesGroup = (statuses: RawPetStatuses, baseUrl: string): PetStatusDefinition[] => {
  return Object.keys(statuses).map((key: string) => ({
    id: key,
    label: statuses[key].label || '',
    message: statuses[key].message || '',
    fgImage: statuses[key].fgImage ? `${baseUrl}/${statuses[key].fgImage}` : '',
    bgImage: statuses[key].bgImage ? `${baseUrl}/${statuses[key].bgImage}` : '',
    alertType: statuses[key].alertType,
  }));
};

const getDefaultToggleStatus = (toggleId: string, toggleDef: PetToggleDefinition) => {
  const defaultState = toggleDef.defaultState || 'off';
  const defaultEffect = defaultState === 'on' ? toggleDef.onState : toggleDef.offState;
  console.log('getDefaultToggleStatus, defaultEffect is ', defaultEffect);

  return {
    id: toggleId,
    state: defaultState,
    effect: defaultEffect,
  } as ActiveToggleState;
};

/*
{ toggle, status }
{ id, on, off, defaultState }
{ string }
*/
export const getUpdatedToggles = (
  toggleId: string,
  toggleDef: PetToggleDefinition,
  deltaToggles: ActiveToggleState[]
) => {
  const updatedToggleStatus =
    deltaToggles.find((ats) => ats.id === toggleId) || getDefaultToggleStatus(toggleId, toggleDef);

  // whether it was an existing one or a new one, flip it.
  if (updatedToggleStatus.state === 'on') {
    updatedToggleStatus.state = 'off';
    updatedToggleStatus.effect = toggleDef.offState;
  } else {
    updatedToggleStatus.state = 'on';
    updatedToggleStatus.effect = toggleDef.onState;
  }

  // give back the same junk, with the new toggle value
  return deltaToggles.filter((ct) => ct.id !== toggleId).concat([updatedToggleStatus]);
};

export const getUpdatedStats = (
  deltaPetStats: DeltaPetStat[],
  statDefinitions: DeltaStat[],
  newStats: StatChangeDefinition[]
) =>
  deltaPetStats.map((curStat) => {
    // skip stats that don't need to change
    const statChange = newStats.find((newStat) => newStat.statId === curStat.id);
    const statDef = statDefinitions.find((sD) => curStat.id === sD.id);
    if (!statDef) {
      // this is unexpected
      console.error(`getUpdatedStats, invalid stat "${curStat.id}" requested`);
      return curStat;
    }
    if (!statChange || (statChange.type === 'incremental' && statChange.value === 0)) {
      return curStat;
    }

    // change valid stats
    const rawNew = statChange.type === 'absolute' ? statChange.value : curStat.value + statChange.value;
    return {
      ...curStat,
      value: clamp(rawNew, 0, statDef.max),
    };
  });

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
};

export const petStoreSlice = createSlice({
  name: 'petStore',
  initialState: initialStoreState,
  reducers: {
    pingStore: (state: PetStoreState, action: PayloadAction<PingPayload>) => {
      const nowTime = action.payload.time;

      state.lastSaved = nowTime;
    },
    clearSave: () => {
      // TODO, this should be handled differently, or taken out of redux otherwise
      window.localStorage.clear();
      window.location.reload();
    },
    resetActivePet: (state: PetStoreState) => {
      console.log('resetting', state.activeIdx);
    },
    killActivePet: (state: PetStoreState) => {
      console.log('------ PET WAS KILLED ----------');
      state.deltaPets[state.activeIdx] = {
        ...state.deltaPets[state.activeIdx],
        diedOn: new Date().getTime(),
        beingTracked: false,
      };
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
    setDeltaPayload: (state: PetStoreState, action: PayloadAction<LocalStorageState>) => {
      const lsState = action.payload;
      state.deltaPets = lsState.pets;
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
      // console.log('addNewInteractionEvent', interaction);

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
        const deltaIdx = state.deltaPets.findIndex((cP) => cP.id === activePet.id);
        if (deltaIdx > -1) {
          const deltaStats = state.deltaPets[deltaIdx]?.stats || [];
          const statDefs = activePet.logic.stats;

          state.deltaPets[deltaIdx] = {
            ...state.deltaPets[deltaIdx],
            stats: getUpdatedStats(deltaStats, statDefs, interaction.changeStats),
          };
        }
      }

      if (interaction.changeToggle) {
        doSave = true;
        const activePet = state.pets[state.activeIdx];
        const deltaIdx = state.deltaPets.findIndex((cP) => cP.id === activePet.id);
        if (deltaIdx > -1) {
          const deltaToggles = state.deltaPets[deltaIdx]?.activeToggles || [];
          // const toggleDefs = activePet.logic.toggles;

          const newToggles = getUpdatedToggles(interaction.id, interaction.changeToggle, deltaToggles);

          state.deltaPets[deltaIdx] = {
            ...state.deltaPets[deltaIdx],
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
        diedOn: initialState?.diedOn || undefined, // should this always be undefined?
        bgImage: petDefinition.bgImage ? `${petDefinition.baseUrl}/${petDefinition.bgImage}` : null,
        bgColor: petDefinition.bgColor || null,
        theme: parseTheme(petDefinition.theme)
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
        if (!state.deltaPets.find((cP) => cP.id === initialState?.id)) {
          state.deltaPets = [
            ...state.deltaPets,
            ...[
              {
                ...initialState,
                lastSaved: initialState?.lastSaved || nowTime,
              },
            ],
          ];
        }
      } else {
        const foundIdx = state.deltaPets.findIndex((cP) => cP.id === petDefinition.id);
        if (foundIdx > -1) {
          state.deltaPets = state.deltaPets.filter((_, cpIdx) => cpIdx !== foundIdx);
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
  resetActivePet,
  setDeltaPayload,
  addNewInteractionEvent,
  restoreInteractionFromSave,
  removeInteractionEvent,
  killActivePet,
} = petStoreSlice.actions;

export const getActiveIdx = (state: RootState): number => state.petStore.activeIdx;
export const selectPets = (state: RootState): PetDefinition[] => state.petStore.pets;
export const getActiveInteractions = (state: RootState): InteractionCooldownStatus[] => state.petStore.interactions;
export const getDeltaPets = (state: RootState): SavedPetState[] => state.petStore.deltaPets;
export const getNewLastSaved = (state: RootState): number => state.petStore.lastSaved;

export const selectLastSaved = createSelector([getNewLastSaved], (lastSaved) => lastSaved);

export const selectActivePet = createSelector([selectPets, getActiveIdx], (pets, activeIdx) => {
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
  bgColor: activePet?.bgColor,
}));

export const selectActiveDeltaPet = createSelector(
  [getDeltaPets, selectActivePet],
  (deltaPets, activePet): SavedPetState | null => {
    if (!activePet) return null;
    return deltaPets.find((cP) => cP.id === activePet.id) || null;
  }
);

export const selectActivePetStats = createSelector([selectActiveDeltaPet], (savedPetState): DeltaPetStat[] => {
  if (!savedPetState) return [];
  return savedPetState.stats || [];
});
export const selectActiveToggles = createSelector(
  [selectActiveDeltaPet],
  (savedPetState): ActiveToggleState[] => {
    if (!savedPetState) return [];
    return savedPetState.activeToggles || [];
  }
);

export const selectActiveInfo = createSelector([selectActivePet, getActiveIdx], (activePet, activeIdx): PetInfo | null => {
  if (!activePet) return null;

  return {
    idx: activeIdx, 
    id: activePet.id,
    name: activePet.name,
    bio: activePet.bio,
  };
});

export const selectCooldownStatus = createSelector(
  [getActiveInteractions],
  (activeInteractions: InteractionCooldownStatus[]) => activeInteractions
);

export const selectActivePetLastSaved = createSelector(
  [getDeltaPets, selectActivePet],
  (deltaPets, activePet): number => {
    if (!activePet) return 0;
    return deltaPets.find((cP) => cP.id === activePet.id)?.lastSaved || 0;
  }
);

export const selectActiveDeltaStats = createSelector(
  [
    selectActiveStatDefinitions,
    selectActivePetStats,
    selectActiveToggles,
    selectActivePetLastSaved,
    selectLastSaved,
    getDebugMode,
  ],
  (statDefinitions, deltaPetStats, activeToggles, lastPetSavedTime, lastSavedTime, debugMode) => {
    // if (lastPetSavedTime === lastSavedTime) return null;
    return getActiveDeltaStats(statDefinitions, deltaPetStats, activeToggles, lastPetSavedTime, lastSavedTime, debugMode);
  }
);

export const selectActiveDeltaStatuses = createSelector(
  [
    selectActiveDeltaPet,
    selectActiveDeltaStats,
    selectActiveStatDefinitions,
    selectActiveToggles,
    selectActiveInteractionDefinitions,
  ],
  (deltaPet, deltaStats, statDefinitions, activeToggles, interactionDefs) => {
    // This is a great example of where state, caching vs rendering, and swapping pet states
    // is a huge shitshow, this (!beingTracked) prevents prematurely applying status calculations (death)
    // when swapping to them, and everyhthing is ready.
    // BUT do not skip if they are dead, cause then there is no way to render the death stuff,
    // cause dead pets are also beingTracked = false
    if (deltaPet && !deltaPet.beingTracked && deltaPet.diedOn === undefined) {
      return [];
    }

    // for each statDef, look through statDef.statEffects, which is a whenThenNumberGroup[]
    // all stats should be evaluated, and output all unique statuses matched
    const findDeltaStat = (id: string) => deltaStats.find((ds) => ds.id === id);

    let allStatuses: string[] = [];
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

    let newStatuses: string[];
    activeToggles.forEach((activeToggle) => {
      const changeToggleDef = interactionDefs.find((intDef) => intDef.id === activeToggle.id);
      if (changeToggleDef?.changeToggle) {
        if (activeToggle.state === 'on') {
          // all this cause of optional undefined bullshit
          newStatuses =
            changeToggleDef.changeToggle.onState?.filter((sd) => sd.statusId).map((sd) => sd.statusId as string) || [];
        } else {
          newStatuses =
            changeToggleDef.changeToggle.offState?.filter((sd) => sd.statusId).map((sd) => sd.statusId as string) || [];
        }
      }

      // if the statuses are unique, add em to the full list
      allStatuses = allStatuses.concat(newStatuses.filter((sd) => !allStatuses.includes(sd)));
    });

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
  [
    selectActiveDeltaPet,
    selectActiveDeltaStatuses,
    selectActiveBehaviorRuleDefinitions,
    selectActiveBehaviorDefinitions,
  ],
  (activeDeltaPet, deltaStatusIds, behaviorRules, behaviorDefinitions): PetBehaviorDefinition | null => {
    if (!activeDeltaPet) {
      return null;
    }
    const foundBehaviorId = getFirstOfWhenThenStringGroups(behaviorRules, deltaStatusIds);
    return behaviorDefinitions.find((bD) => bD.id === foundBehaviorId) || null;
  }
);

export const selectIsActivePetAlive = createSelector(
  [selectActiveBehavior],
  (activeBehavior) => activeBehavior && activeBehavior.type !== 'dead'
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
        visible: isEnabled || !iD.hideWhenUnavailable,
        definition: iD,
        cooldownStatus: cooldownStatus,
      } as PetInteractionDetail;
    });
  }
);

export const selectPetList = createSelector([selectPets, getActiveIdx], (pets, activeIdx) =>
  pets.map((p, idx) => ({
    name: p.name,
    id: p.id,
    isActive: idx === activeIdx,
  }))
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
  [selectLastSaved, selectActiveDeltaStats, selectActivePet, selectCooldownStatus, getDeltaPets],
  (lastSaved, activeDeltaStats, activePet, activeInteractions, storedPets): LocalStorageState | null => {
    //TODO, this seems fishy
    if (!activeDeltaStats) {
      return null;
    }

    if (!activePet) {
      return DEFAULT_LOCALSTORAGE_STATE;
    }

    const foundIdx = storedPets.findIndex((sP: SavedPetState) => sP.id === activePet.id);
    let newList = [];
    if (foundIdx > -1) {
      // A pet was found, this is where pet data is saved on an interval
      newList = storedPets.map((sP: SavedPetState) => {
        if (sP.id === activePet.id) {
          // console.log('checking beingTracked', sP.beingTracked);
          const curStats = sP.beingTracked ? activeDeltaStats : sP.stats;
          // TODO, do i need to do this caching stuff like stats for toggles??

          return {
            id: activePet.id,
            stats: curStats,
            bornOn: sP.bornOn,
            diedOn: sP.diedOn,
            lastSaved: lastSaved,
            beingTracked: sP.diedOn === undefined ? true : false,
            activeToggles: sP.activeToggles,
          };
        }

        return {
          ...sP,
          beingTracked: false,
        };
      });
    } else {
      // a pet was not found
      const defaultToggles = activePet.logic.interactions
        .filter((interactionDef) => {
          return !!interactionDef.changeToggle;
        })
        .map((interactionDef) => {
          const defaultState = interactionDef.changeToggle?.defaultState || 'off';
          const defaultEffect =
            defaultState === 'on' ? interactionDef.changeToggle?.onState : interactionDef.changeToggle?.offState;

          return {
            id: interactionDef.id,
            state: defaultState,
            effect: defaultEffect || [],
          } as ActiveToggleState;
        });

      // create new pet data in cookie
      newList = storedPets.concat([
        {
          id: activePet.id,
          stats: activeDeltaStats,
          bornOn: activePet.bornOn,
          diedOn: undefined,
          lastSaved: lastSaved,
          beingTracked: false,
          activeToggles: defaultToggles,
        },
      ]);
    }

    // console.log('>> returning savedPayload', newList);
    return {
      config: {
        schemaVersion: SAVE_SCHEMA_VERSION,
        activePet: activePet?.id || '',
        lastSaved: lastSaved,
      },
      interactions: activeInteractions,
      pets: newList,
    };
  }
);

export default petStoreSlice.reducer;

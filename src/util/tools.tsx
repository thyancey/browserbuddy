import { PetStatDefinition, DeltaStat, CachedPetStat, ActiveToggleState } from '../types';

// general
export const round = (number: number, pad?: number) => {
  if (!pad) return Math.round(number);

  const rounder = Math.pow(10, pad);
  return Math.round(number * rounder) / rounder;
};

export const clamp = (val: number, min: number, max: number) => {
  return Math.min(Math.max(val, min), max);
};

export const randBetween = (range: number[]) => {
  return range[0] + Math.random() * (range[1] - range[0]);
};

export const getStatValue = (
  s: PetStatDefinition,
  cachedPetStats: CachedPetStat[],
  timeDiffInSeconds: number,
  perMinuteAdjustment?: number,
  forceCurrent?: boolean,
  debugMode?: boolean
) => {
  let curValue = cachedPetStats.find((cS) => cS.id === s.id)?.value;
  if (curValue === undefined) {
    curValue = s.value;
  }
  if (forceCurrent) return curValue; // from invalid time supplied, dont calculate

  // overrides may come from an activeToggle thats changing the behavior of a stat
  const perMinute = s.perMinute + (perMinuteAdjustment || 0);
  // calculations are done at "second" granularity. Debug mode lets you see pets change faster.
  const perSecond = debugMode ? perMinute : perMinute / 30;
  return Math.round(clamp(curValue + perSecond * timeDiffInSeconds, 0, s.max) * 100) / 100;
};

interface StatOverrideDef {
  [ key: string ]: number
}

const getStatOverrides = (activeToggles: ActiveToggleState[]) => {
  const statOverrides: StatOverrideDef = {};
  activeToggles.forEach(aT => {
    aT.effect.forEach(tsd => {
      if(tsd.statId && tsd.perMinute) {
        if(statOverrides[tsd.statId]){
          statOverrides[tsd.statId] += tsd.perMinute;
        } else {
          statOverrides[tsd.statId] = tsd.perMinute;
        }
      }
    })
  });

  return statOverrides;
}

export const getRenderedDeltaStats = (
  stats: PetStatDefinition[],
  cachedPetStats: CachedPetStat[],
  activeToggles: ActiveToggleState[],
  oldSaveTime: number,
  newSaveTime: number,
  debugMode?: boolean
) => {
  const timeDiffInSeconds = (newSaveTime - oldSaveTime) / 1000;

  const statOverrides = getStatOverrides(activeToggles);


  /*
    TODO, this could get removed simplified after resolving:
    - redundant call on save
    - negative time on change pet between saves
  */

  if (timeDiffInSeconds <= 0) {
    return stats.map((s) => {
      return {
        id: s.id,
        value: getStatValue(s, cachedPetStats, timeDiffInSeconds, statOverrides[s.id] || 0, true, debugMode),
        max: s.max,
        label: s.label,
      };
    });
  }

  return stats.map((s) => {
    return {
      id: s.id,
      value: getStatValue(s, cachedPetStats, timeDiffInSeconds, statOverrides[s.id] || 0, undefined, debugMode),
      max: s.max,
      label: s.label,
    };
  });
};

export const getCachedDeltaStats = (
  stats: PetStatDefinition[],
  cachedPetStats: CachedPetStat[],
  activeToggles: ActiveToggleState[],
  oldSaveTime: number,
  newSaveTime: number,
  debugMode?: boolean
) => {
  const timeDiffInSeconds = newSaveTime && oldSaveTime ? (newSaveTime - oldSaveTime) / 1000 : 0;

  const statOverrides = getStatOverrides(activeToggles);

  return stats.map((s) => {
    return {
      id: s.id,
      value: getStatValue(s, cachedPetStats, timeDiffInSeconds, statOverrides[s.id], undefined, debugMode),
    } as DeltaStat;
  });
};

const LOG = false;
export const log = (...messages: unknown[]) => {
  LOG && console.log(...messages);
};

export const ensureArray = (thing: unknown): unknown[] => {
  if(thing === undefined) return [];
  return Array.isArray(thing) ? thing : [thing];
};

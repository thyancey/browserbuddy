import { PetStatDefinition, DeltaStat, CachedPetStat } from '../types';

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
  timeDiff: number,
  forceCurrent?: boolean,
  debugMode?: boolean
) => {
  let curValue = cachedPetStats.find((cS) => cS.id === s.id)?.value;
  if (curValue === undefined) {
    curValue = s.value;
  }

  if (forceCurrent) return curValue; // from invalid time supplied, dont calculate

  // calculations are done at "second" granularity. Debug mode lets you see pets change faster.
  const perSecond = debugMode ? s.perMinute : s.perMinute / 1000;
  return Math.round(clamp(curValue + perSecond * timeDiff, 0, s.max) * 100) / 100;
};

export const getRenderedDeltaStats = (
  stats: PetStatDefinition[],
  cachedPetStats: CachedPetStat[],
  oldSaveTime: number,
  newSaveTime: number,
  debugMode?: boolean
) => {
  const timeDiff = (newSaveTime - oldSaveTime) / 1000;
  /*
    TODO, this could get removed simplified after resolving:
    - redundant call on save
    - negative time on change pet between saves
  */

  if (timeDiff <= 0) {
    return stats.map((s) => {
      return {
        id: s.id,
        value: getStatValue(s, cachedPetStats, timeDiff, true, debugMode),
        max: s.max,
        label: s.label,
      };
    });
  }

  return stats.map((s) => {
    return {
      id: s.id,
      value: getStatValue(s, cachedPetStats, timeDiff, undefined, debugMode),
      max: s.max,
      label: s.label,
    };
  });
};

export const getCachedDeltaStats = (
  stats: PetStatDefinition[],
  cachedPetStats: CachedPetStat[],
  oldSaveTime: number,
  newSaveTime: number,
  debugMode?: boolean
) => {
  const timeDiff = newSaveTime && oldSaveTime ? (newSaveTime - oldSaveTime) / 1000 : 0;
  return stats.map((s) => {
    return {
      id: s.id,
      value: getStatValue(s, cachedPetStats, timeDiff, undefined, debugMode),
    } as DeltaStat;
  });
};

const LOG = false;
export const log = (...messages: unknown[]) => {
  LOG && console.log(...messages);
};

export const ensureArray = (thing: unknown): unknown[] => {
  return Array.isArray(thing) ? thing : [thing];
};

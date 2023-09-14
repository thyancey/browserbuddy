import { ConditionOperator, RawWhenThen, WhenNumber, WhenThenNumberGroup, WhenThenStringBooleanGroup, WhenThenStringGroup } from '../types';
import { ensureArray } from './tools';

export const evaluateAvailabilityWhenThenGroup = (wTSG: WhenThenStringBooleanGroup[], stringCriteria: string[]) => {
  if(wTSG.length === 0) return true;

  for(let i = 0; i < wTSG.length; i++){
    // an empty when is used as a "default"
    if(wTSG[i].when.length === 0){
      return returnThen(wTSG[i].then);
    }

    // if all when values are fufilled by available stringCriteria
    if(wTSG[i].when.filter(wtsg => stringCriteria.indexOf(wtsg) > -1).length === wTSG[i].when.length){
      return returnThen(wTSG[i].then);
    }
  }

  return false;
}

export const getFirstOfWhenThenStringGroups = (whenThenGroup: WhenThenStringGroup[], stringCriteria: string[]) => {
  // console.log('getFirstOfWhenThenStringGroup', whenThenGroup, stringCriteria)
  for(let i = 0; i < whenThenGroup.length; i++){
    const thenResult = evaluateWhenThenStringGroup(whenThenGroup[i], stringCriteria);
    if(thenResult){
      return thenResult;
    }
  }
  return null;
}

// i made 'then' annoying. when its an array, return a random one, when its not, just return it
export const returnThen = (then: unknown[] | unknown) => {
  if(Array.isArray(then)){
    return then[Math.floor(Math.random() * then.length)];
  }else{
    return then;
  }
}

export const evaluateWhenThenNumberGroup = (whenThenNumberGroup: WhenThenNumberGroup, referenceValue: number, maxValue:number) => {
  if(whenThenNumberGroup.when.find(w => !evaluateWhenNumber(w, referenceValue, maxValue))){
    // something in the required group was not found
    return null;
  }
  return returnThen(whenThenNumberGroup.then);
};

export const evaluateWhenThenStringGroup = (whenThenStringGroup: WhenThenStringGroup, stringCriteria: string[]) => {
  // in first depth, every result must match the stringCriteria (AND)
  // in second depth (if provided for a 1d value), at least one result must match string criteria (OR)
  let matchCount = 0;
  for(let i = 0; i < whenThenStringGroup.when.length; i++){
    if (Array.isArray(whenThenStringGroup.when[i])) {
      // do OR checks
      if((whenThenStringGroup.when[i] as string[]).some((whenString: string) => stringCriteria.includes(whenString))) {
        matchCount++;
      }
    } else {
      // check this value
      if(stringCriteria.indexOf(whenThenStringGroup.when[i] as string) > -1) matchCount++;
    }
  }

  if(matchCount === whenThenStringGroup.when.length){
    return returnThen(whenThenStringGroup.then);
  }
  return null;
  /*
  // remember, an empty when skips this and just returns the result
  if (whenThenStringGroup.when.find(w => stringCriteria.indexOf(w) === -1)){
    // something in the required group was not found
    return null;
  }
  return returnThen(whenThenStringGroup.then);
  */
};

export const parseInteractionWhenThenGroup = (rawWhenThenGroup: RawWhenThen[]) => {
  return rawWhenThenGroup.map(rwt => {
    return {
      when: ensureArray(rwt.when),
      then: rwt.then
    } as WhenThenStringBooleanGroup;
  }) as WhenThenStringBooleanGroup[]; 
}

export const parseStatusesWhenThenGroup = (rawWhenThenGroup: RawWhenThen[]) => {
  return rawWhenThenGroup.map(rwt => {
    return {
      when: ensureArray(rwt.when),
      then: ensureArray(rwt.then)
    } as WhenThenStringGroup;
  }) as WhenThenStringGroup[];
}

export const parseStatsWhenThenGroup = (rawWhenThenGroup: RawWhenThen[]) => {
  if(!rawWhenThenGroup) return [] as WhenThenNumberGroup[];
  return rawWhenThenGroup.map(rwt => {
    // json should support string or array, make this better
    const whens = ensureArray(rwt.when) as string[];
    return {
      when: whens.map(w => parseExpressionString(w)).filter(w => w !== null),
      then: ensureArray(rwt.then)
    } as WhenThenNumberGroup;
  }) as WhenThenNumberGroup[];
}

/*
  //- convert <=_20% into:
  {
    condition: '<=',
    criteria: '20',
    isPercent: true
  }
*/
export const EXPRESSION_MAP = {
  '=': (v:number, c:number) => (v === c),
  '<': (v:number, c:number) => (v < c),
  '<=': (v:number, c:number) => (v <= c),
  '>': (v:number, c:number) => (v > c),
  '>=': (v:number, c:number) => (v >= c)
};

export const parseExpressionString = (expressionString: string) => {
  try{
    const valueTokens = expressionString.split('_');
    const condition = valueTokens[0] as ConditionOperator;
    const valueCriteria = valueTokens[1];
    const percentageSplit = valueCriteria.split('%');

    if(!EXPRESSION_MAP[condition]){
      console.error(`parseExpressionString(): invalid condition "${condition}" from expressionString "${expressionString}"`);
      return null;
    }
  
    return {
      condition: condition,
      criteria: Number(percentageSplit[0]),
      isPercent: percentageSplit.length > 1
    } as WhenNumber;
  } catch(e){
    console.error(`could not parse expressionString "${expressionString}", expressionStrings must use one 
    of the following operators: [<=,<,=,>,>=] and follow a format like "<=_10%"`);
    return null;
  }
};

export const evaluateWhenNumber = (whenNumber: WhenNumber, reference: number, referenceMax: number) => {
  try{
    const referenceValue = whenNumber.isPercent ? 
      Math.round((reference / referenceMax) * 100)
      : reference;
    return EXPRESSION_MAP[whenNumber.condition](referenceValue, whenNumber.criteria);
  }catch(e){
    console.log(`could not evaluate "whenNumber:${whenNumber}", "reference:${reference}", "referenceMax:${reference}"`);
    return null;
  }
};


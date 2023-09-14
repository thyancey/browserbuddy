import { RootState } from '../store';
import reducer, { PetStoreState, selectRenderedDeltaStats, selectActiveIdx, setActiveId } from './index';
// import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';


describe('#petstore.reducers', () => {
  describe('#setActiveId', () => {
    it('should add valid idx', () => {
      const prevState = {
        activeIdx: -1,
        pets: [{
          id:'pet-def1'
        },{
          id:'pet-def2'
        }]
      } as PetStoreState;

      expect(reducer(prevState, setActiveId('pet-def2'))).toEqual(expect.objectContaining({
        activeIdx: 1
      }));
    });
    
    // test('should error and on invalid pet idx', () => {
    //   const prevState = {
    //     activeIdx: -1,
    //     pets: [{
    //       id:'pet-def1'
    //     },{
    //       id:'pet-def2'
    //     }]
    //   } as PetStoreState;

    //   expect(() => {reducer(prevState, setActiveId('pet-def0'))}).toThrow(`Cannot find pet with id \"pet-def0\"`);
    // });
  });
});

describe('#petstore.selectors', () => {
  describe('#selectActiveIdx', () => {
    it('should select activeIdx', () => {
      const mockState = {
        petStore:{
          activeIdx: 3
        }
      } as RootState;
  
      expect(selectActiveIdx(mockState)).toEqual(3);
    });
  });

  
  describe('#selectRenderedDeltaStats', () => {
    it('should increase stat over time', () => {
      const lastTime = 1000;
      const time = 121000;
      expect(selectRenderedDeltaStats.resultFunc(
        [
          {
            id: 'food',
            label: 'Food',
            value: 5,
            perMinute: 1,
            max: 10,
            fullIsGood: true,
            statEffects: []
          }
        ],
        [],
        lastTime,
        time,
        false
      )).toEqual([{
        id: 'food',
        label: 'Food',
        value: 7,
        max: 10
      }]);
    });
    
    it('should decrease stat over time', () => {
      const lastTime = 1000;
      const time = 61000;
      expect(selectRenderedDeltaStats.resultFunc(
        [
          {
            id: 'food',
            label: 'Food',
            value: 500,
            perMinute: -50,
            max: 1000,
            fullIsGood: true,
            statEffects: []
          }
        ],
        [],
        lastTime,
        time,
        false
      )).toEqual([{
        id: 'food',
        label: 'Food',
        value: 450,
        max: 1000
      }]);
    });
    
    it('stat should not go past 0 or max', () => {
      const lastTime = 1000;
      const time = 601000; // 10 minutes later...
      expect(selectRenderedDeltaStats.resultFunc(
        [
          {
            id: 'food',
            label: 'Food',
            value: 5,
            perMinute: 3,
            max: 10,
            fullIsGood: true,
            statEffects: []
          },{
            id: 'other',
            label: 'Other',
            value: 5,
            perMinute: -3,
            max: 10,
            fullIsGood: true,
            statEffects: []
          }
        ],
        [],
        lastTime,
        time,
        false
      )).toEqual([{
        id: 'food',
        label: 'Food',
        value: 10,
        max: 10
      },{
        id: 'other',
        label: 'Other',
        value: 0,
        max: 10
      }]);
    });
  });
});
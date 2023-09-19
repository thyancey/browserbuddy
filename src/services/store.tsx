import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { LocalStorageState } from '../types';
import petStoreReducer from './petstore';
import uiReducer from './ui';
import { SAVE_SCHEMA_VERSION } from '../util/tools';


export const store = configureStore({
  reducer: {
    petStore: petStoreReducer,
    ui: uiReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const DEFAULT_LOCALSTORAGE_STATE: LocalStorageState = {
  config:{
    schemaVersion: SAVE_SCHEMA_VERSION,
    activePet: '',
    lastSaved: -1
  },
  interactions:[],
  pets:[]
};
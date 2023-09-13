// slightly evolving from create-react-app example
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface UiState {
  debugMode: boolean;
}

const initialState: UiState = {
  debugMode: false,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setDebugMode: (state: UiState, action: PayloadAction<boolean>) => {
      state.debugMode = action.payload;
    },
  },
});

export const { setDebugMode } = uiSlice.actions;

export const getDebugMode = (state: RootState): boolean => state.ui.debugMode;

export default uiSlice.reducer;

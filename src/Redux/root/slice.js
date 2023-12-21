import { createSlice } from '@reduxjs/toolkit';
import { handlePending, handleRejected } from './datesSlice';

const initialState = {
  isLoading: false,
  error: '',
};

export const rootSlice = createSlice({
  name: 'root',
  initialState,
  extraReducers: builder => {
    builder
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected);
  },
});

export const rootReducer = rootSlice.reducer;

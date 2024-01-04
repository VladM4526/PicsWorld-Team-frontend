import { createSlice } from '@reduxjs/toolkit';
import {
  fetchWater,
  addWater,
  deleteWater,
  editWater,
} from './waterOperations';

const waterSlice = createSlice({
  name: 'water',
  initialState: {
    notes: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      /// Fetch
      .addCase(fetchWater.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchWater.fulfilled, (state, { payload }) => {
        state.notes = payload;
        state.isLoading = false;
      })
      .addCase(fetchWater.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      /// Add
      .addCase(addWater.pending, state => {
        state.isLoading = true;
      })
      .addCase(addWater.fulfilled, (state, { payload }) => {
        state.notes.push(payload);
        state.isLoading = false;
      })
      .addCase(addWater.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      /// Edit
      .addCase(editWater.pending, state => {
        state.isLoading = true;
      })
      .addCase(editWater.fulfilled, (state, { payload }) => {
        state.notes = state.notes.map(i => (i.id !== payload.id ? i : payload));
        state.isLoading = false;
      })
      .addCase(editWater.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      /// Delete
      .addCase(deleteWater.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteWater.fulfilled, (state, { payload }) => {
        state.notes = state.notes.filter(note => note.id !== payload);
        state.isLoading = false;
      })
      .addCase(deleteWater.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      }),
});

export const waterReducer = waterSlice.reducer;

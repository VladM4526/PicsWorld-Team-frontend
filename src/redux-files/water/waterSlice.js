import { createSlice } from '@reduxjs/toolkit';
import {
  fetchWater,
  addWater,
  deleteWater,
  editWater,
  fetchStats,
} from './waterOperations';

const waterSlice = createSlice({
  name: 'water',
  initialState: {
    notes: [],
    stats: [],
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
        rejectError(state, payload);
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
        rejectError(state, payload);
      })
      /// Edit
      .addCase(editWater.pending, state => {
        state.isLoading = true;
      })
      .addCase(editWater.fulfilled, (state, { payload }) => {
        state.notes = payload;
        state.isLoading = false;
      })
      .addCase(editWater.rejected, (state, { payload }) => {
        rejectError(state, payload);
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
        rejectError(state, payload);
      })
      /// get statistic data for month
      .addCase(fetchStats.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchStats.fulfilled, (state, { payload }) => {
        state.stats = state.stats(note => note.id !== payload);
        state.isLoading = false;
      })
      .addCase(fetchStats.rejected, (state, { payload }) => {
        rejectError(state, payload);
      }),
});

function rejectError(state, payload) {
  state.isLoading = false;
  state.error = payload;
}

export const waterReducer = waterSlice.reducer;

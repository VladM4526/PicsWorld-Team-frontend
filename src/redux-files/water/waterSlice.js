import { createSlice } from '@reduxjs/toolkit';
import {
  fetchWater,
  addWater,
  deleteWater,
  editWater,
  fetchStats,
} from './waterOperations';
// import { logout } from 'redux-files/error/errorSlice';

const waterSlice = createSlice({
  name: 'water',
  initialState: {
    percentage: '0%',
    waterRecords: [],
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
        let percentage = parseInt(payload[0].percentage);
        percentage = percentage > 100 ? 100 : percentage;
        state.percentage = percentage;
        state.waterRecords = payload[0].waterRecords;
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
        state.waterRecords.push(payload);
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
        state.waterRecords = state.waterRecords.map(record =>
          record._id === payload._id ? payload : record
        );
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
        state.waterRecords = state.waterRecords.filter(
          waterRecords => waterRecords._id !== payload
        );
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
        state.stats = payload;
        state.isLoading = false;
      })
      .addCase(fetchStats.rejected, (state, { payload }) => {
        rejectError(state, payload);
      }),
      // .addCase(logout, state => {
      //   return {
      //     percentage: '0%',
      //     waterRecords: [],
      //     stats: [],
      //     isLoading: false,
      //     error: null,
      //   }
      // }),

});

function rejectError(state, payload) {
  state.isLoading = false;
  state.error = payload;
}

export const waterReducer = waterSlice.reducer;

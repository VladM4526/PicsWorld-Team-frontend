import { createSelector } from '@reduxjs/toolkit';
import { selectDailyNorma } from 'redux-files/auth/selectors';

export const selectIsLoading = state => state.water.isLoading;
export const selectError = state => state.water.error;
export const selectNotes = state => state.water.waterRecords;
export const selectStats = state => state.water.stats;
export const selectPercentage = ({ water: { percentage } }) =>
  parseInt(percentage) > 100 ? 100 : parseInt(percentage);

export const selectPercentToday = createSelector(
  [selectNotes, selectDailyNorma],
  (notes, norma) => {
    if (!notes.length) {
      return 0;
    }
    const total = notes.reduce((a, note) => a + parseInt(note.waterVolume), 0);
    const percentageToday = Math.round((total / norma) * 100);
    return percentageToday > 100 ? 100 : percentageToday;
  }
);

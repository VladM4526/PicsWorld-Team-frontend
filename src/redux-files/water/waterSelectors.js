// import { createSelector } from '@reduxjs/toolkit';

// export const selectTodos = ({ todos: { items } }) => items;

export const selectIsLoading = state => state.water.isLoading;

export const selectError = state => state.water.error;
export const selectNotes = state => state.water.notes;
export const selectStats = state => state.water.stats;

// export const selectFilter = state => state.filter;

// export const selectVisibleTodos = createSelector(
//   [selectTodos, selectFilter],
//   (todos, filter) => {
//     return todos.filter(todo =>
//       todo.text.toLowerCase().includes(filter.toLowerCase())
//     );
//   }
// );

import { createSlice } from '@reduxjs/toolkit';
import { refreshUserAccount, signInThunk } from './backendRequest';

const initialState = {
  user: { email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signInThunk.fulfilled, (state, action) => {
        state.user = action.payload.users;
        state.token = action.payload.token;
        state.isLoggedIn = false;
      })
      .addCase(refreshUserAccount.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUserAccount.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUserAccount.rejected, state => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;

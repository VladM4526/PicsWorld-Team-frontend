import { createSlice } from '@reduxjs/toolkit';
import {
  addWaterRateThunk,
  refreshUserAccount,
  signInThunk,
  updateAvatarUser,
  logOutUser,
} from './thunk';
// import { logout } from 'redux-files/error/errorSlice';

// add name after login or registration
const initialState = {
  user: {
    name: null,
    email: null,
    password: null,
    avatarURL: null,
    gender: null,
    waterRate: null,
  },
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
        state.user = action.payload.user;
        state.token = action.payload.user.token;
        state.isLoggedIn = true;
      })
      .addCase(logOutUser.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      // .addCase(logout, state => {
      //   state.user = { name: null, email: null };
      //   state.token = null;
      //   state.isLoggedIn = false;
      // })
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
      })
      .addCase(addWaterRateThunk.fulfilled, (state, { payload }) => {
        state.isLoggedIn = true;
        state.user.waterRate = payload;
      })
      .addCase(updateAvatarUser.fulfilled, (state, { payload }) => {
        state.isLoggedIn = true;
        state.user.avatarURL = payload;
      });
  },
});

export const authReducer = authSlice.reducer;

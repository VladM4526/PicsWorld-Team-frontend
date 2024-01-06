import { createSlice } from '@reduxjs/toolkit';
import { addWaterRateThunk, refreshUserAccount, signInThunk, } from './backendRequest';

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
      })
      .addCase(addWaterRateThunk.fulfilled, (state, {payload}) => {
        console.log(payload)
        state.isLoggedIn = true;
        state.user.waterRate = payload;
      });
  },
});

export const authReducer = authSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import {
  addWaterRateThunk,
  logOut,
  refreshUserAccount,
  signInThunk,
  signUpThunk,
} from './backendRequest';

// const valueUser = 'V';
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
  error: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signUpThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(signUpThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.user.token;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(signUpThunk.rejected, (state, { payload }) => {
        rejectUserError(state, payload);
      })

      .addCase(signInThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(signInThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.user.token;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(signInThunk.rejected, (state, { payload }) => {
        rejectUserError(state, payload);
      })

      .addCase(logOut.pending, state => {
        state.isLoading = true;
      })
      .addCase(logOut.fulfilled, state => {
        state = initialState;
        // state.user = {
        //   name: null,
        //   email: null,
        //   password: null,
        //   avatarURL: null,
        //   gender: null,
        //   waterRate: null,
        // };
        // state.token = null;
        // state.isLoggedIn = false;
        // state.isLoading = false;
      })
      .addCase(logOut.rejected, (state, { payload }) => {
        rejectUserError(state, payload);
      })

      .addCase(refreshUserAccount.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUserAccount.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        console.log(action);
      })
      .addCase(refreshUserAccount.rejected, (state, { payload }) => {
        state.isRefreshing = false;
        state.error = payload;
      })

      .addCase(addWaterRateThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(addWaterRateThunk.fulfilled, (state, { payload }) => {
        // console.log(payload);
        // state.isLoggedIn = true;
        state.user.waterRate = payload;
        state.isLoading = false;
      })
      .addCase(addWaterRateThunk.rejected, (state, { payload }) => {
        rejectUserError(state, payload);
      });
  },
});

function rejectUserError(state, payload) {
  state.isLoading = false;
  state.error = payload;
}

export const authReducer = authSlice.reducer;

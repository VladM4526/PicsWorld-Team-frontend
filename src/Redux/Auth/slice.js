import { createSlice } from '@reduxjs/toolkit';
import { signInThunk, signUpThunk } from './backendRequest';
import { handleAuth } from './Errors';

const initialState = {
  user: {
    email: '',
    avatarURL: '',
    userName: '',
    gender: '',
    waterRate: '',
  },
  token: null,
  stayAuth: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
    .addCase(signInThunk.fulfilled, handleAuth)
    .addCase(signUpThunk.fulfilled, handleAuth)
  },
});

export const authReducer = authSlice.reducer;

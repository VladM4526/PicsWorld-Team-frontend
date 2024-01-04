import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
  signin,
  signup,
  refreshUser,
  setToken,
  addWaterRate,
} from '../api/api';

export const signInThunk = createAsyncThunk(
  'auth/signin',
  async (body, { rejectWithValue }) => {
    try {
      const data = await signin(body);
      setToken(data.newUser.token);
      if (data) {
        toast.success('Hello! You are successful login in', {
          position: toast.POSITION.TOP_CENTER,
        });
      }
      return data;
    } catch (error) {
      console.log(error);
      // toast.error(`Email or password is wrong. Try again`);
      return rejectWithValue(error.message);
    }
  }
);

export const signUpThunk = createAsyncThunk(
  'auth/signup',
  async (body, { rejectWithValue }) => {
    try {
      const responce = await signup(body);

      console.log(responce);
      if (responce) {
        toast.success('Hello! You are successful registration', {
          position: toast.POSITION.TOP_CENTER,
        });
      }
      return responce;
    } catch (error) {
      console.log(error);
      toast.error(`Email or password is wrong. Try again`, {
        position: toast.POSITION.TOP_CENTER,
      });
      return rejectWithValue(error.message);
    }
  }
);

export const refreshUserAccount = createAsyncThunk(
  'auth/users/current',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    console.log(state);

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setToken(persistedToken);
      const responce = await refreshUser();
      return responce.data.token;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addWaterRateThunk = createAsyncThunk(
  'users/waterrate',
  async (waterRate, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    // if (persistedToken === null) {
    //   return thunkAPI.rejectWithValue('Unable to fetch user');
    // }
    console.log(waterRate);
    console.log(persistedToken);
    try {
      setToken(persistedToken);
      const responce = await addWaterRate(waterRate);
      console.log(responce);
      toast.success(`Ok`);
      return responce;
    } catch (error) {
      console.log('oops', error);
      toast.error(
        `Oops! Something goes wrong. Please try again! ${error.message}`
      );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

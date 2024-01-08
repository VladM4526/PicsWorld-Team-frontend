import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
  signin,
  signup,
  refreshUser,
  setToken,
  addWaterRate,
  signout,
} from '../../helpers/api/apiUser';

export const signInThunk = createAsyncThunk(
  'auth/signin',
  async (body, { rejectWithValue }) => {
    try {
      const data = await signin(body);
      // if (!data) {
      toast.success('Hello! You are successful login in', {
        position: toast.POSITION.TOP_CENTER,
      });
      setToken(data.user.token);
      // }
      return data;
    } catch (error) {
      // console.log(error);
      toast.error(`Email or password is wrong. Try again`);
      return rejectWithValue(error.message);
    }
  }
);

export const signUpThunk = createAsyncThunk(
  'auth/signup',
  async (body, { rejectWithValue }) => {
    try {
      const responce = await signup(body);

      // console.log(responce);
      // if (responce) {
      toast.success('Hello! You register successfully ', {
        position: toast.POSITION.TOP_CENTER,
      });
      setToken(responce.token);
      // }
      return responce;
    } catch (error) {
      // console.log(error);
      toast.error(`Email or password is wrong. Try again`, {
        position: toast.POSITION.TOP_CENTER,
      });
      return rejectWithValue(error.message);
    }
  }
);

export const refreshUserAccount = createAsyncThunk(
  'users/current',
  async (_, { getState, rejectWithValue }) => {
    // const state = thunkAPI.getState();
    const persistedToken = getState().auth.token;
    if (persistedToken === null) {
      return rejectWithValue('Please, signin or signup in app');
    }
    try {
      setToken(persistedToken);
      const userData = await refreshUser(persistedToken);
      toast.success(`Hi ${userData.name && userData.email}! You are in`);
      return userData;
    } catch (error) {
      toast.error(
        `Oops! Something goes wrong. Please try again! ${error.message}`
      );
      return rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await signout();
    toast.success(`Bye-bye. See you later!`);
  } catch (error) {
    toast.error(
      `Oops. Something goes wrong. Please try again! ${error.message}`
    );
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addWaterRateThunk = createAsyncThunk(
  'users/waterrate',
  async (waterRate, thunkAPI) => {
    // const state = thunkAPI.getState();
    // const persistedToken = state.auth.token;
    // if (persistedToken === null) {
    //   return thunkAPI.rejectWithValue('Unable to fetch user');
    // }
    // console.log(waterRate);
    // console.log(persistedToken);
    try {
      // setToken(persistedToken);
      const responce = await addWaterRate(waterRate);
      // console.log(responce);
      toast.success(`Ok`);
      return responce;
    } catch (error) {
      // console.log('oops', error);
      toast.error(
        `Oops! Something goes wrong. Please try again! ${error.message}`
      );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

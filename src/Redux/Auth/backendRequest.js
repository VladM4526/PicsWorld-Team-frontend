import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { signin, signup, refreshUser, setToken } from '../API/api';

export const signInThunk = createAsyncThunk(
  'auth/signin',
  async (body, { rejectWithValue }) => {
    try {
      const data = await signin(body);
      setToken(data.token);
      if (data) {
        toast.success('Hello! You are successful login in', {
          position: toast.POSITION.TOP_CENTER,
        });
        return;
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
  'auth/current',
  async (_, { rejectWithValue, getState }) => {
    try {
      const {
        auth: { token },
      } = getState();
      const data = await refreshUser(token);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
  {
    condition: (_, thunkApi) => {
      const {
        auth: { token },
      } = thunkApi.getState();
      if (!token) {
        return false;
      }
    },
  }
);

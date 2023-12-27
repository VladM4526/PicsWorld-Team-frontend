import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { signin, signup } from '../API/api';

export const signInThunk = createAsyncThunk(
  'users/signin',
  async (body, { rejectWithValue }) => {
    try {
      const data = await signin(body);
      return data;
    } catch (error) {
      toast.error(`Email or password is wrong. Try again`);
      return rejectWithValue(error.message);
    }
  }
);

export const signUpThunk = createAsyncThunk(
  'users/signup',
  async (body, { rejectWithValue }) => {
    try {
      const data = await signup(body);
      console.log(data);
      toast.success('Hello! You are successful registration', {
        position: toast.POSITION.TOP_CENTER,
      });
      return data;
    } catch (error) {
      console.log(body);
      toast.error(`Email or password is wrong. Try again`, {
        position: toast.POSITION.TOP_CENTER,
      });
      return rejectWithValue(error.message);
    }
  }
);

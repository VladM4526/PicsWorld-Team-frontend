import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { signin, signup } from '../API/api';

export const signInThunk = createAsyncThunk(
  '/auth/signin',
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
  'auth/signup',
  async (body, { rejectWithValue }) => {
    try {
      const res = await signup(body)
      console.log(res)
      toast.success('Hello! You are successful registration', {position: toast.POSITION.TOP_CENTER});
      return res.data;
    } catch (error) {
      console.log(body)
      toast.error(`Email or password is wrong. Try again`, {position: toast.POSITION.TOP_CENTER});
      return rejectWithValue(error.message);
    }
  },
);

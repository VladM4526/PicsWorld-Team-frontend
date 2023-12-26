import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { signin } from '../API/api';

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

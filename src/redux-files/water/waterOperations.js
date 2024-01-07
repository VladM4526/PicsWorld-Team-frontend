import { createAsyncThunk } from '@reduxjs/toolkit';
// import toast from 'react-hot-toast';
import { toast } from 'react-toastify';
import {
  deleteWaterNote,
  editWaterNote,
  getWaterNotes,
  addWaterNote,
  getWaterStats,
} from 'helpers/api/apiWater.js';
import { setToken } from 'helpers/api/apiUser';
// import { localeTime } from 'helpers/localeTime';

export const fetchWater = createAsyncThunk(
  'water/today',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    console.log(persistedToken);
    try {
      setToken(persistedToken);
      const data = await getWaterNotes();
      // console.log('dataall', data);

      // toast.success(`Ok`);
      return data.length ? data : [{ waterRecords: [], percentage: '0%' }];
    } catch (error) {
      toast.error(
        `Oops. Something goes wrong. Please try again! hi ${error.message}`
      );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchStats = createAsyncThunk(
  'water/stats',
  async (month, { rejectWithValue }) => {
    try {
      const data = await getWaterStats(month);
      toast.success(`Ok`);
      return data;
    } catch (error) {
      toast.error(
        `Oops. Something goes wrong. Please try again! ${error.message}`
      );
      return rejectWithValue(error.message);
    }
  }
);

export const addWater = createAsyncThunk(
  'water/addWater',
  async (waterNote, { rejectWithValue }) => {
    try {
      // console.log('waterNote', waterNote);
      const data = await addWaterNote(waterNote);
      // console.log('dataadd', data);
      toast.success(`Ok`);
      return data;
      // return { ...data, date: localeTime(data.date) };
    } catch (error) {
      toast.error(
        `Oops! Something goes wrong. Please try again! ${error.message}`
      );
      return rejectWithValue(error.message);
    }
  }
);

export const deleteWater = createAsyncThunk(
  'water/deleteWater',
  async (waterNoteId, { rejectWithValue }) => {
    try {
      const { id } = await deleteWaterNote(waterNoteId);
      toast.success(`Ok`);
      return id;
    } catch (error) {
      toast.error(
        `Oops. Something goes wrong. Please try again! ${error.message}`
      );
      return rejectWithValue(error.message);
    }
  }
);

export const editWater = createAsyncThunk(
  'water/editWater',
  async ({ waterNoteId, newNote }, { rejectWithValue }) => {
    try {
      console.log('newNote', waterNoteId, newNote);
      const data = await editWaterNote(waterNoteId, newNote);
      toast.success(`Ok`);
      return data;
    } catch (error) {
      toast.error(
        `Oops. Something goes wrong. Please try again! ${error.message}`
      );
      return rejectWithValue(error.message);
    }
  }
);
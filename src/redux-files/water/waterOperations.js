import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
  deleteWaterNote,
  editWaterNote,
  getWaterNotes,
  addWaterNote,
  getWaterStats,
} from 'helpers/api/apiWater.js';
import { setToken } from 'helpers/api/apiUser';

export const fetchWater = createAsyncThunk(
  'water/today',
  async (_, thunkAPI) => {
    console.log('water/today');
    // const state = thunkAPI.getState();
    // const persistedToken = state.auth.token;
    // if (persistedToken === null) {
    //   return thunkAPI.rejectWithValue('Unable to fetch user');
    // }
    try {
      // setToken(persistedToken);
      const data = await getWaterNotes();

      toast.success(`Ok fetch water`);
      return data.length ? data : [{ waterRecords: [], percentage: '0%' }];
    } catch (error) {
      toast.error(`Oops. Something goes wrong. ${error.message}`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchStats = createAsyncThunk(
  'water/stats',
  async (month, { rejectWithValue }) => {
    console.log('water/stats');

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
    console.log('water/addWater');

    try {
      const data = await addWaterNote(waterNote);
      toast.success(`Ok`);
      return {
        _id: data._id,
        waterVolume: data.waterVolume,
        date: data.date,
      };
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
    console.log('water/deleteWater');

    try {
      await deleteWaterNote(waterNoteId);
      toast.success(`Ok`);
      return waterNoteId;
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
  async (note, { rejectWithValue }) => {
    console.log('water / editWater');

    try {
      const data = await editWaterNote(note);
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

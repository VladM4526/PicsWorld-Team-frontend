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
import axios from 'axios';

const headerAxiosToken = axios.defaults.headers.common.Authorization;


export const fetchWater = createAsyncThunk(
  'water/today',
  async (_, thunkAPI) => {
    if (!headerAxiosToken) {
      setToken(thunkAPI.getState().auth.token);
    }
    try {
      //
      const data = await getWaterNotes();
      return data.length ? data : [{ waterRecords: [], percentage: '0%' }];
    } catch (error) {
      // toast.error(
      //   `Oops. Something goes wrong. Please try again!`
      // );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchStats = createAsyncThunk(
  'water/stats',
  async (month, { rejectWithValue, getState }) => {
    if (!headerAxiosToken) {
      setToken(getState().auth.token);
    }
    try {
      const data = await getWaterStats(month);
      return data;
    } catch (error) {
      toast.error(
        `Oops. Something goes wrong. Please try again!`
      );
      return rejectWithValue(error.message);
    }
  }
);

export const addWater = createAsyncThunk(
  'water/addWater',
  async (waterNote, { rejectWithValue }) => {
    try {
      const data = await addWaterNote(waterNote);
       toast.success(`Your record was added`);
      return {
        _id: data._id,
        waterVolume: data.waterVolume,
        date: data.date,
      };
    } catch (error) {
      toast.error(
        `Oops! Something goes wrong. Please try again!`
      );
      return rejectWithValue(error.message);
    }
  }
);

export const deleteWater = createAsyncThunk(
  'water/deleteWater',
  async (waterNoteId, { rejectWithValue }) => {
    try {
      await deleteWaterNote(waterNoteId);
      toast.success(`Your record was deleted`);
      return waterNoteId;
    } catch (error) {
      toast.error(
        `Oops. Something goes wrong. Please try again!`
      );
      return rejectWithValue(error.message);
    }
  }
);

export const editWater = createAsyncThunk(
  'water/editWater',
  async (note, { rejectWithValue }) => {
    try {
      const data = await editWaterNote(note);
      toast.success(`Your record was edited`);
      return data;
    } catch (error) {
      toast.error(
        `Oops. Something goes wrong. Please try again!`
      );
      return rejectWithValue(error.message);
    }
  }
);

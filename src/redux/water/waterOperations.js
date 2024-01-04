import { createAsyncThunk } from '@reduxjs/toolkit';
// import toast from 'react-hot-toast';
import {
  addWaterNote,
  deleteWaterNote,
  editWaterNote,
  getWaterNotes,
} from '../api/apiWaters.js';
import { toast } from 'react-toastify';

export const fetchWater = createAsyncThunk(
  'water/fetchAll',
  async (_, thunkApi) => {
    try {
      const data = await getWaterNotes();
      toast.success(`Ok`);
      return data;
    } catch (error) {
      toast.error(
        `Oops. Something goes wrong. Please try again! ${error.message}`
      );
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addWater = createAsyncThunk(
  'water/addWater',
  async (waterNote, thunkApi) => {
    try {
      const data = await addWaterNote(waterNote);
      toast.success(`Ok`);
      return data;
    } catch (error) {
      toast.error(
        `Oops! Something goes wrong. Please try again! ${error.message}`
      );
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteWater = createAsyncThunk(
  'water/deleteWater',
  async (waterNoteId, thunkApi) => {
    try {
      const { id } = await deleteWaterNote(waterNoteId);
      toast.success(`Ok`);
      return id;
    } catch (error) {
      toast.error(
        `Oops. Something goes wrong. Please try again! ${error.message}`
      );
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const editWater = createAsyncThunk(
  'water/editWater',
  async ({ waterNoteId, newNote }, thunkApi) => {
    try {
      const data = await editWaterNote(waterNoteId, newNote);
      toast.success(`Ok`);
      return data;
    } catch (error) {
      toast.error(
        `Oops. Something goes wrong. Please try again! ${error.message}`
      );
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

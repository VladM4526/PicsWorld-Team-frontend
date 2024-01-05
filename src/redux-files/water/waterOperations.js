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

export const fetchWater = createAsyncThunk(
  'water/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getWaterNotes();
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
      const data = await addWaterNote(waterNote);
      toast.success(`Ok`);
      return data;
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

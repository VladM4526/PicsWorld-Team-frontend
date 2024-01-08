import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
  signin,
  signup,
  refreshUser,
  setToken,
  addWaterRate,
  updateAvatarUsers,
  updateUserAccount,
} from '../../helpers/api/apiUser';

export const signInThunk = createAsyncThunk(
  'auth/signin',
  async (body, { rejectWithValue }) => {
    try {
      const data = await signin(body);
      // setToken(data.user.token);
      if (data) {
        toast.success('Hello! You are successful login in', {
          position: toast.POSITION.TOP_CENTER,
        });
      }
      return data;
    } catch (error) {
      console.log(error);
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
  'users/current',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      setToken(persistedToken);
      const userData = await refreshUser(persistedToken);
      return userData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addWaterRateThunk = createAsyncThunk(
  'users/waterrate',
  async (waterRate, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    // if (persistedToken === null) {
    //   return thunkAPI.rejectWithValue('Unable to fetch user');
    // }
    try {
      setToken(persistedToken);
      const responce = await addWaterRate(waterRate);
      toast.success(`Your daily norma was edited`);
      return responce;
    } catch (error) {
      toast.error(
        `Oops! Something goes wrong. Please try again! ${error.message}`
      );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateAvatarUser = createAsyncThunk(
  'users/avatars',
  async (updateAvatar, { rejectWithValue }) => {
    try {
      const avatarURL = await updateAvatarUsers(updateAvatar);

      console.log(avatarURL);
      if (avatarURL) {
        toast.success('The photo has been successfully uploaded.', {
          position: toast.POSITION.TOP_CENTER,
        });
      }
      return avatarURL;
    } catch (error) {
      console.log(error);
      toast.error(
        `Unfortunately, the photo wasn't upload successfully. Please try again.`,
        {
          position: toast.POSITION.TOP_CENTER,
        }
      );
      return rejectWithValue(error.message);
    }
  }
);

export const updateUserProfileThunk = createAsyncThunk(
  'auth/UserProfile',
  async (updateUser, { rejectWithValue }) => {
    try {
      const response = await updateUserAccount(updateUser);
      return response;
    } catch (error) {
      switch (error.response.status) {
        case 409:
          toast.error(
            `This email is already in use. Please try a others email.`
          );
          return rejectWithValue(error.massage);
        case 400:
          toast.error(`Wrong password. Please repeat again.`);
          return rejectWithValue(error.massage);
        default:
          toast.error(`Error. Please try again later.`);
          return rejectWithValue(error.massage);
      }
    }
  }
);

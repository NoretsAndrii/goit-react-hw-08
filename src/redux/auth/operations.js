import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const register = createAsyncThunk(
  'auth/register',
  async (newUser, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', newUser);
      console.log(response);
      axios.defaults.headers.common.Authorization = `${response.data.token}`;

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', userData);
      axios.defaults.headers.common.Authorization = `${response.data.token}`;

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    axios.defaults.headers.common.Authorization = ``;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const refresh = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const currentState = thunkAPI.getState();
    axios.defaults.headers.common.Authorization = `${currentState.auth.token}`;
    const response = await axios.get('/users/current');
    return response.data;
  },
  {
    condition(_, thunkAPI) {
      const currentState = thunkAPI.getState();
      return currentState.auth.token !== null;
    },
  }
);

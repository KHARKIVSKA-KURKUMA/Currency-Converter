import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = 'Lts60hQ2yewpZABIhoxX1Q==2c2pBrx3yob13E3L';

export const fetchAnswer = createAsyncThunk(
  'convertor/fetchAnswer',
  async ({ amount, want, have }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        'https://api.api-ninjas.com/v1/convertcurrency',
        {
          params: {
            want,
            have,
            amount,
          },
          headers: {
            'X-Api-Key': API_KEY,
          },
        }
      );

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

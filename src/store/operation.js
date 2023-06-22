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

const EXCHANGE_RATES_KEY = '84fcb961f1875f74846b1a7d';
axios.defaults.baseURL = 'https://v6.exchangerate-api.com/v6/';

export const fetchExchangeRates = createAsyncThunk(
  'rates/fetchExchangeRates',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios(`${EXCHANGE_RATES_KEY}/latest/UAH`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

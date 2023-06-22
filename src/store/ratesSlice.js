import { createSlice } from '@reduxjs/toolkit';
import { fetchExchangeRates } from 'store/operation';

const handlePending = state => {
  state.isLoading = true;
  state.error = '';
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const ratesSlice = createSlice({
  name: 'rates',
  initialState: {
    isLoading: false,
    error: '',
    rates: [],
  },
  extraReducers: builder => {
    builder
      .addCase(fetchExchangeRates.pending, handlePending)
      .addCase(fetchExchangeRates.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = '';
        state.rates = payload.conversion_rates;
      })
      .addCase(fetchExchangeRates.rejected, handleRejected);
  },
});

export const ratesReducer = ratesSlice.reducer;

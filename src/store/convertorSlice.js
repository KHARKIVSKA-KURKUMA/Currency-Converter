import { createSlice } from '@reduxjs/toolkit';
import { fetchAnswer } from 'store/operation';

const handlePending = state => {
  state.isLoading = true;
  state.error = '';
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const converterSlice = createSlice({
  name: 'converter',
  initialState: {
    convertHistory: [],
    isLoading: false,
    error: '',
    result: [],
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAnswer.pending, handlePending)
      .addCase(fetchAnswer.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = '';
        state.result = payload;
        state.convertHistory = [...state.convertHistory, payload];
      })
      .addCase(fetchAnswer.rejected, handleRejected);
  },
});

export const converterReducer = converterSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { fetchAnswer } from 'store/operation';

const handlePending = state => {
  state.isLoading = true;
  state.error = '';
  state.isOpen = false;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
  state.isOpen = false;
};

const converterSlice = createSlice({
  name: 'converter',
  initialState: {
    convertHistory: [],
    isLoading: false,
    error: '',
    result: [],
    isOpen: false,
  },
  reducers: {
    setVisibilityValue: state => {
      state.isOpen = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAnswer.pending, handlePending)
      .addCase(fetchAnswer.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = '';
        state.result = payload;
        state.isOpen = true;
        state.convertHistory = [...state.convertHistory, payload];
      })
      .addCase(fetchAnswer.rejected, handleRejected);
  },
});

export const converterReducer = converterSlice.reducer;
export const { setVisibilityValue } = converterSlice.actions;

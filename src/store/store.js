import { configureStore } from '@reduxjs/toolkit';
import { converterReducer } from './convertorSlice';
import { ratesReducer } from './ratesSlice';

const reducer = {
  converter: converterReducer,
  rates: ratesReducer,
};

export const store = configureStore({ reducer });

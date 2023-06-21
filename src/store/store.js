import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { converterReducer } from './convertorSlice';

const reducer = combineReducers({
  converter: converterReducer,
});
export const store = configureStore({ reducer });

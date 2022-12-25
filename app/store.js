import { configureStore } from '@reduxjs/toolkit';
import paginateReducer from '../components/paginateSlice';

export const store = configureStore({
  reducer: {
    paginate: paginateReducer,
  },
});
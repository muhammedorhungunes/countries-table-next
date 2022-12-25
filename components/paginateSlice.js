import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 1,
  status: 'idle',
};

export const paginateSlice = createSlice({
  name: 'paginate',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    set: (state, action) => {
      state.value = action.payload;
    },
  },
  extraReducers: (builder) => {
  },
});

export const { increment, decrement, set } = paginateSlice.actions;

export const selectPaginate = (state) => state.paginate.value;

export default paginateSlice.reducer;
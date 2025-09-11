import { createSlice } from '@reduxjs/toolkit';

import type { CounterState } from './counter.types';

const initialState: CounterState = { value: 0 };

const counterSlice = createSlice({
  initialState: initialState,
  name: 'counter',
  reducers: {
    decrement: (state: CounterState) => {
      state.value -= 1;
    },
    increment: (state: CounterState) => {
      state.value += 1;
    },
    reset: (state: CounterState) => {
      state.value = 0;
    }
  }
});

export const { decrement, increment, reset } = counterSlice.actions;
export default counterSlice.reducer;

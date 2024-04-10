import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ICounter } from '../../interfaces/ICounter';

const counterState: ICounter = { count: 0 };

export const counterSlice = createSlice({
  name: 'counter',
  initialState: counterState,
  reducers: {
    incrementCounter(state, action: PayloadAction<number>) {
      state.count = state.count + action.payload;
    },
    decrementCounter(state, action: PayloadAction<number>) {
      state.count = state.count - action.payload;
    },
  },
});

export default counterSlice.reducer;
export const { incrementCounter, decrementCounter } = counterSlice.actions;

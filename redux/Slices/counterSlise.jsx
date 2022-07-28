import { createSlice } from "@reduxjs/toolkit";

const initialsState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialsState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    clear: (state) => {
      state.value = 0;
    },
  },
});

export const { increment, decrement, incrementByAmount, clear } =
  counterSlice.actions;
export default counterSlice.reducer;

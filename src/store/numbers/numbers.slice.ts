import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "store/store";
import { NumbersResponseType } from "vars/types/numbers.type";
import { numbersApi } from "./numbers.api";

interface NumbersState {
  data: string[];
}

const initialNumbersState: NumbersState = {
  data: [],
};

export const numbersSlice = createSlice({
  name: "numbers",
  initialState: initialNumbersState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      numbersApi.endpoints.getNumbers.matchFulfilled,
      (state, { payload }: PayloadAction<NumbersResponseType>) => {
        state.data = payload.data;
      }
    );
  },
});

export const selectNumbersData = (state: RootState) => state.numbers;

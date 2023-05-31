import { configureStore } from "@reduxjs/toolkit";
import { numbersApi } from "./numbers/numbers.api";
import { numbersSlice } from "./numbers/numbers.slice";

export const store = configureStore({
  reducer: {
    [numbersApi.reducerPath]: numbersApi.reducer,
    numbers: numbersSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([numbersApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

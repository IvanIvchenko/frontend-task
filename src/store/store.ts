import { configureStore } from "@reduxjs/toolkit";
import { recordApi } from "./record/record.api";
import { recordSlice } from "./record/record.slice";

export const store = configureStore({
  reducer: {
    [recordApi.reducerPath]: recordApi.reducer,
    record: recordSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([recordApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

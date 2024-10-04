import { configureStore } from "@reduxjs/toolkit";
import { reducers } from "../reducers";
import { barsApi } from "../api/barsApi";

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(barsApi.middleware),
});

export type SelectorType = ReturnType<typeof store.getState>;

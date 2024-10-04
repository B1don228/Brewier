import { combineReducers } from "@reduxjs/toolkit";
import { barsApi } from "../api/barsApi";
import { reducer as brewiersReducer } from "../slices/brewiersSlice";
import { reducer as searchReducer } from "../slices/searchSlice";

export const reducers = combineReducers({
  brewiersReducer,
  searchReducer,
  [barsApi.reducerPath]: barsApi.reducer,
});

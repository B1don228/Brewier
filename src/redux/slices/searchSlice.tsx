import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  search: string | null;
}

const initialState: IInitialState = {
  search: null,
};

const searchSlice = createSlice({
  name: "searchSlice",
  initialState,
  reducers: {
    changeSearch: (state, { payload }) => {
      state.search = payload;
    },
  },
});

export const { actions, reducer } = searchSlice;

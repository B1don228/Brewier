import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  search: string;
}

const initialState: IInitialState = {
  search: "",
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

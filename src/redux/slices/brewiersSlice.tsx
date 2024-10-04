import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  brewiersType: "list" | "map";
}
const initialState: IInitialState = {
  brewiersType:
    (localStorage.getItem("brewie_type") as "list" | "map") || "list",
};

const brewiersSlice = createSlice({
  name: "brewiers",
  initialState,
  reducers: {
    changeBrewiersType: (state) => {
      if (localStorage.getItem("brewie_type") === "list") {
        localStorage.removeItem("brewie_type");
        state.brewiersType = "map";
        return localStorage.setItem("brewie_type", "map");
      }

      localStorage.removeItem("brewie_type");
      state.brewiersType = "list";
      return localStorage.setItem("brewie_type", "list");
    },
  },
});

export const { reducer, actions } = brewiersSlice;

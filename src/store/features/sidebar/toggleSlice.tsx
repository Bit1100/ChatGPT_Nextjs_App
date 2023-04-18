import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

interface IinitialState {
  isOpen: boolean;
}

const initialState: IinitialState = {
  isOpen: false,
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    sidebartoggle: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        isOpen: action.payload.toggle.isOpen,
      };
    },
  },
});

export const { sidebartoggle } = sidebarSlice.actions;

export default sidebarSlice.reducer;

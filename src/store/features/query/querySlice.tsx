import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

export interface IQuery {
  toggle: boolean;
  query: {
    formQuery: {};
    settingsQuery: {};
    creativityQuery: {};
    languageQuery: {};
  };
  response: any;
}

const initialState: IQuery = {
  query: {
    formQuery: null,
    settingsQuery: {
      "Tone of Voice": "friendly",
    },
    creativityQuery: {
      "Using Your Creativity Level": "Optimal",
    },
    languageQuery: {
      Language: "English",
    },
  },
  toggle: false,
  response: {
    data: "You can search anything based on your interests",
    status: 2,
    message: "",
    code: 400,
    remainingCredit: "",
  },
};

export const querySlice = createSlice({
  name: "query",
  initialState,
  reducers: {
    setFormQuery: (state, action) => {
      state.query.formQuery = action.payload;
    },
    setSettingsQuery: (state, action) => {
      state.query.settingsQuery = action.payload;
    },
    setCreativityQuery: (state, action) => {
      state.query.creativityQuery = action.payload;
    },
    setLanguageQuery: (state, action) => {
      state.query.languageQuery = action.payload;
    },
    setResponse: (state, action) => {
      state.response = { ...state.response, ...action.payload };
    },
    setToggle: (state, action) => {
      state.toggle = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        toggle: action.payload.query.toggle,
        query: action.payload.query.query,
        response: action.payload.query.response,
      };
    },
  },
});

export const {
  setFormQuery,
  setSettingsQuery,
  setCreativityQuery,
  setLanguageQuery,
  setResponse,
  setToggle,
} = querySlice.actions;

export default querySlice.reducer;

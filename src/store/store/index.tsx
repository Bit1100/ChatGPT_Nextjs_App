import { configureStore, ThunkAction } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

// import { Action } from "redux";
import toggleReducer from "../features/sidebar/toggleSlice";
import dcardsReducer from "../features/dashboardCards/dcardsSlice";
import queryReducer from "../features/query/querySlice";

export const store = configureStore({
  reducer: {
    toggle: toggleReducer,
    dcards: dcardsReducer,
    query: queryReducer,
  },
  devTools: true,
});

const makeStore = () => store;

export type AppStore = ReturnType<typeof makeStore>;

export type AppState = ReturnType<AppStore["getState"]>;

export type AppDispatch = AppStore["dispatch"];

// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   AppState,
//   unknown,
//   Action
// >;

export const wrapper = createWrapper<AppStore>(makeStore);

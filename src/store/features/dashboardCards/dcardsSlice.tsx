import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

export interface IInput {
  name: string;
  placeholder: string;
  type: string;
  maxLength: number;
  required: boolean;
  title: string;
  id: string;
  queryParams: string;
}

export interface ICard {
  id: string;
  title: string;
  category: string;
  icon: string;
  iconBgClr: string;
  description: string;
  tags?: string[];
  inputs: IInput[];
  queryParams: string;
  outputs: string;
}

export interface IDCards {
  cards: ICard[];
  card: ICard;
}

const initialState: IDCards = {
  cards: [],
  card: {} as ICard,
};

export const dcardsSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setCards: (state, action) => {
      state.cards = action.payload;
    },
    setCard: (state, action) => {
      state.card = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        cards: action.payload.dcards.cards,
        card: action.payload.dcards.card,
      };
    },
  },
});

export const { setCards, setCard } = dcardsSlice.actions;

export default dcardsSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  id: string;
  rank: string;
  symbol: string;
  name: string;
  supply: string;
  maxSupply: string;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  priceUsd: string;
  changePercent24Hr: string;
  vwap24Hr: string;
  explorer: string;
  quantity: string;
};

const initialState: InitialState[] = [];

const listMyCoins = createSlice({
  name: "listMyCoins",
  initialState,
  reducers: {
    getYourCoin: (state, action: PayloadAction<InitialState[]>) => {
      state.push(action.payload);
    },
  },
});

export const { getYourCoin } = listMyCoins.actions;
export default listMyCoins.reducer;

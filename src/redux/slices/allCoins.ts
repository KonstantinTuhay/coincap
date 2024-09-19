import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Data } from "../apiCoins";

const initialState: Data[] = [];

const allCoins = createSlice({
  name: "threepopularcoins",
  initialState,
  reducers: {
    setAllCoins: (state, action: PayloadAction<Data[]>) => {
      return (state = action.payload);
    },
  },
});

export const { setAllCoins } = allCoins.actions;
export default allCoins.reducer;

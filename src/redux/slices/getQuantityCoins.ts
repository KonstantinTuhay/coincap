import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = string;

const initialState: InitialState = "";

const getQuantityCoins = createSlice({
  name: "getQuantity",
  initialState,
  reducers: {
    getQuantity: (state, action: PayloadAction<string>) => {
      return (state = action.payload);
    },
  },
});

export const { getQuantity } = getQuantityCoins.actions;
export default getQuantityCoins.reducer;

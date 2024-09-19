import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = string;

const initialState: InitialState = "";

const getDetailsCoin = createSlice({
  name: "getDetailsCoin",
  initialState,
  reducers: {
    getCoin: (state, action: PayloadAction<string>) => {
      return (state = action.payload);
    },
  },
});

export const { getCoin } = getDetailsCoin.actions;
export default getDetailsCoin.reducer;

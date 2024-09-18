import { configureStore } from "@reduxjs/toolkit";
import { apiCoins } from "./apiCoins";

export const store = configureStore({
  reducer: {
    [apiCoins.reducerPath]: apiCoins.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiCoins.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

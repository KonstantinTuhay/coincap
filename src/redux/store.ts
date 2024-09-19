import { configureStore } from "@reduxjs/toolkit";
import { apiCoins } from "./apiCoins";
import popularCoins from "./slices/popularCoins";

export const store = configureStore({
  reducer: {
    popularCoins: popularCoins,
    [apiCoins.reducerPath]: apiCoins.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiCoins.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

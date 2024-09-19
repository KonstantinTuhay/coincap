import { configureStore } from "@reduxjs/toolkit";
import { apiCoins } from "./apiCoins";
import popularCoins from "./slices/popularCoins";
import getDetailsCoin from "./slices/getDetailsCoin";
import getQuantityCoins from "./slices/getQuantityCoins";
import listMyCoins from "./slices/listMyCoins";

export const store = configureStore({
  reducer: {
    listMyCoins: listMyCoins,
    getQuantityCoins: getQuantityCoins,
    getDetailsCoin: getDetailsCoin,
    popularCoins: popularCoins,
    [apiCoins.reducerPath]: apiCoins.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiCoins.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

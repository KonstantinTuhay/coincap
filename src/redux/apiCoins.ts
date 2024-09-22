import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const headers = {
  Authorization: `Bearer c26fc0f1-c207-4496-a4aa-1501b12f3e2e`,
};

export type Data = {
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
};

export type Coins = {
  data: Data[];
  // newData?: Data[];
  timestamp?: number;
};

export type Coin = {
  data: Data;
  timestamp?: number;
};

export const apiCoins = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.coincap.io/v2" }),
  endpoints: (builder) => ({
    getCoins: builder.query<Data[], void>({
      query: () => {
        return {
          url: `/assets`,
          method: "GET",
          headers,
        };
      },
      transformResponse: (response: Coins) => response.data,
    }),
    getDetailsCoin: builder.query<Data, void>({
      query: (id) => {
        return {
          url: `/assets/${id}`,
          method: "GET",
          headers,
        };
      },
      transformResponse: (response: Coin) => response.data,
    }),
  }),
});

export const { useGetCoinsQuery, useGetDetailsCoinQuery } = apiCoins;

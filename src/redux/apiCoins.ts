import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const headers = {
//   Authorization: `Bearer ${localStorage.getItem("token")}`,
// };

export type Coins = {
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

export const apiCoins = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.coincap.io/v2" }),
  endpoints: (builder) => ({
    getCoins: builder.query<Coins[], void>({
      query: () => {
        return {
          url: `/assets`,
          method: "GET",
          //   headers,
        };
      },
    }),
  }),
});

export const { useGetCoinsQuery } = apiCoins;

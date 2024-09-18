import { JSX } from "react";
import { HeadTable } from "../HeadTable";
import { CoinData } from "../CoinData";

export const Table = (): JSX.Element => {
  const data = [
    {
      id: 1,
      scr: "BTC",
      name: "Bitcoin",
      vwap: 22.0,
      change: "2.02$",
      marketCap: 446.4,
      price: "23162.22$",
    },
    {
      id: 1,
      scr: "BTC",
      name: "Eitherium",
      vwap: 22.0,
      change: "2.02$",
      marketCap: 446.4,
      price: "23162.22$",
    },
    {
      id: 1,
      scr: "BTC",
      name: "DogeCoin",
      vwap: 22.0,
      change: "2.02$",
      marketCap: 446.4,
      price: "23162.22$",
    },
    {
      id: 1,
      scr: "BTC",
      name: "Coin",
      vwap: 22.0,
      change: "2.02$",
      marketCap: 446.4,
      price: "23162.22$",
    },
  ];

  return (
    <table style={{ border: "1" }}>
      <thead>
        <HeadTable />
      </thead>
      <tbody>
        {data.map((coin) => {
          return <CoinData key={crypto.randomUUID()} coin={coin} />;
        })}
      </tbody>
    </table>
  );
};

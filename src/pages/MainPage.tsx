import { JSX } from "react";
import { CoinData } from "../components/CoinData";

export const MainPage = (): JSX.Element => {
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
      name: "Bitcoin",
      vwap: 22.0,
      change: "2.02$",
      marketCap: 446.4,
      price: "23162.22$",
    },
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
      name: "Bitcoin",
      vwap: 22.0,
      change: "2.02$",
      marketCap: 446.4,
      price: "23162.22$",
    },
  ];

  return (
    <>
      <table style={{ border: "1" }}>
        <thead>
          <tr>
            <th>№</th>
            <th></th>
            <th>Name</th>
            <th>VWAP (24HR)</th>
            <th>Change (24HR)</th>
            <th>Market Cap</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((coin) => {
            return <CoinData key={crypto.randomUUID()} coin={coin} />;
          })}
        </tbody>
      </table>
    </>
  );
};

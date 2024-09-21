import { JSX } from "react";
import { useAppSelector } from "../../hooks/hooks";
import { PopularCoin } from "../PopularCoin";

export const PopularСryptoCurrencies = (): JSX.Element => {
  const popularCoins = useAppSelector((state) => state.popularCoins);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <p>Popular cryptocurrencies:</p>
      {popularCoins.map((popularCoin) => (
        <PopularCoin key={crypto.randomUUID()} popularCoin={popularCoin} />
      ))}
    </div>
  );
};

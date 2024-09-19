import { JSX } from "react";
import { Data } from "../../redux/apiCoins";

type PopularCoin = {
  popularCoin: Data;
};

export const PopularCoin = ({ popularCoin }: PopularCoin): JSX.Element => {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <p
        style={{
          margin: "5px",
        }}
      >
        {popularCoin.name}
      </p>
      <p
        style={{
          margin: "5px",
        }}
      >
        {popularCoin.priceUsd} $
      </p>
    </div>
  );
};

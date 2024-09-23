import { JSX } from "react";
import { useAppSelector } from "../../hooks/hooks";
import { PopularCoin } from "../PopularCoin";
import { Typography } from "@mui/material";

export const PopularСryptoCurrencies = (): JSX.Element => {
  const popularCoins = useAppSelector((state) => state.popularCoins);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginLeft: "170px",
      }}
    >
      <Typography sx={{ textDecoration: "underline", ml: "20px" }}>
        Popular cryptocurrencies:
      </Typography>
      <div style={{ display: "flex", flexDirection: "row", marginTop: "5px" }}>
        {popularCoins.map((popularCoin) => (
          <PopularCoin key={crypto.randomUUID()} popularCoin={popularCoin} />
        ))}
      </div>
    </div>
  );
};

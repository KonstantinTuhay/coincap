import { JSX } from "react";
import { Data } from "../../redux/apiCoins";
import { Typography, Box } from "@mui/material";

type PopularCoin = {
  popularCoin: Data;
};

export const PopularCoin = ({ popularCoin }: PopularCoin): JSX.Element => {
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        marginLeft: "20px",
      }}
    >
      <Typography style={{ margin: "0px" }}>{popularCoin.name}</Typography>
      <Typography style={{}}>{popularCoin.priceUsd} $</Typography>
    </Box>
  );
};

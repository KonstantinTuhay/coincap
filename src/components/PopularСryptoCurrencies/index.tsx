import { JSX } from "react";
import { useAppSelector } from "../../hooks/hooks";
import { PopularCoin } from "../PopularCoin";
import { Box, Typography } from "@mui/material";
import styles from "../../styles/PopularСryptoCurrencies/index.module.css";

export const PopularСryptoCurrencies = (): JSX.Element => {
  const popularCoins = useAppSelector((state) => state.popularCoins);

  return (
    <Box
      className={styles.box}
      // style={{
      //   display: "flex",
      //   flexDirection: "column",
      //   marginLeft: "170px",
      // }}
    >
      <Typography
        className={styles.popular}
        // sx={{ textDecoration: "underline", ml: "20px" }}
      >
        Popular cryptocurrencies:
      </Typography>
      <Box
        className={styles.boxCoin}
        // style={{ display: "flex", flexDirection: "row", marginTop: "5px" }}
      >
        {popularCoins.map((popularCoin) => (
          <PopularCoin key={crypto.randomUUID()} popularCoin={popularCoin} />
        ))}
      </Box>
    </Box>
  );
};

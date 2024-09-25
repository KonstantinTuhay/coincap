import { JSX } from "react";
import { useAppDispatch } from "../../hooks/hooks";
import { InitialState, sellCoin } from "../../redux/slices/listMyCoins";
import { TableRow, TableCell, Button } from "@mui/material";

type YourCoin = {
  yourCoin: InitialState;
};

const buttonSell = {
  backgroundColor: "#ff0000b0",
};

export const YourListCoins = ({ yourCoin }: YourCoin): JSX.Element => {
  const { name, priceUsd, quantity, coinId } = yourCoin;

  const dispatch = useAppDispatch();

  const handleSell = (coinId: string) => {
    dispatch(sellCoin(coinId));
  };

  return (
    <TableRow>
      <TableCell>{name}</TableCell>
      <TableCell>{priceUsd}</TableCell>
      <TableCell>{quantity}</TableCell>
      <TableCell>{priceUsd}</TableCell>
      <TableCell>
        <Button
          onClick={() => handleSell(coinId || "")}
          variant="contained"
          sx={buttonSell}
        >
          SELL
        </Button>
      </TableCell>
    </TableRow>
  );
};

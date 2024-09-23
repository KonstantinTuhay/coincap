import { JSX } from "react";
import { Data } from "../../redux/apiCoins";
import { getCoin } from "../../redux/slices/getDetailsCoin";
import { useAppDispatch } from "../../hooks/hooks";
import { useNavigate } from "react-router-dom";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Button from "@mui/material/Button";

type Coin = {
  coin: Data;
};

export const CoinData = ({ coin }: Coin): JSX.Element => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const handleClick = (id: string) => {
    dispatch(getCoin(id));
    navigate("/coininformation");
  };

  const addCoin = (id: string) => {
    dispatch(getCoin(id));
    navigate("/addcoin");
  };

  const {
    id,
    rank,
    symbol,
    name,
    marketCapUsd,
    priceUsd,
    changePercent24Hr,
    vwap24Hr,
  } = coin;
  return (
    <>
      <TableRow>
        <TableCell onClick={() => handleClick(id || "")}>{rank}</TableCell>
        <TableCell onClick={() => handleClick(id || "")}>{symbol}</TableCell>
        <TableCell onClick={() => handleClick(id || "")}>{name}</TableCell>
        <TableCell onClick={() => handleClick(id || "")}>
          {vwap24Hr} $
        </TableCell>
        <TableCell onClick={() => handleClick(id || "")}>
          {changePercent24Hr} %
        </TableCell>
        <TableCell onClick={() => handleClick(id || "")}>
          {marketCapUsd} млрд $
        </TableCell>
        <TableCell onClick={() => handleClick(id || "")}>
          {priceUsd} $
        </TableCell>
        <TableCell onClick={() => addCoin(id || "")}>
          <Button variant="contained" sx={{ backgroundColor: "green" }}>
            BUY
          </Button>
        </TableCell>
      </TableRow>
    </>
  );
};

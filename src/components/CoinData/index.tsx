import { JSX, useState } from "react";
import { Data } from "../../redux/apiCoins";
import { getCoin } from "../../redux/slices/getDetailsCoin";
import { AddCoinModal } from "../AddCoinModal";
import { useAppDispatch } from "../../hooks/hooks";
import { useNavigate } from "react-router-dom";
import { TableRow, TableCell, Button } from "@mui/material";
import styles from "../../styles/CoinData/index.module.css";

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
    setOpen(true);
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

  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <AddCoinModal open={open} setOpen={setOpen} />

      <TableRow className={styles.hoverRow}>
        <TableCell
          className={styles.tableCeilStyle}
          onClick={() => handleClick(id || "")}
        >
          {rank}
        </TableCell>
        <TableCell
          className={styles.tableCeilStyle}
          onClick={() => handleClick(id || "")}
        >
          {symbol}
        </TableCell>
        <TableCell
          className={styles.tableCeilStyle}
          onClick={() => handleClick(id || "")}
        >
          {name}
        </TableCell>
        <TableCell
          className={styles.tableCeilStyle}
          onClick={() => handleClick(id || "")}
        >
          {vwap24Hr} $
        </TableCell>
        <TableCell
          className={styles.tableCeilStyle}
          onClick={() => handleClick(id || "")}
        >
          {changePercent24Hr} %
        </TableCell>
        <TableCell
          className={styles.tableCeilStyle}
          onClick={() => handleClick(id || "")}
        >
          {marketCapUsd} млрд $
        </TableCell>
        <TableCell
          className={styles.tableCeilStyle}
          onClick={() => handleClick(id || "")}
        >
          {priceUsd} $
        </TableCell>
        <TableCell
          className={styles.tableCeilStyle}
          onClick={() => addCoin(id || "")}
        >
          <Button variant="contained" className={styles.buttonStyle}>
            BUY
          </Button>
        </TableCell>
      </TableRow>
    </>
  );
};

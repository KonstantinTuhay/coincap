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

const hoverRow = {
  "&:hover": {
    backgroundColor: "#80808029",
    transition: "0.5s",
  },
};

const tableCeilStyle = {
  padding: "10px",
};

const buttonStyle = {
  backgroundColor: "#028202e0",
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
      <TableRow sx={hoverRow}>
        <TableCell sx={tableCeilStyle} onClick={() => handleClick(id || "")}>
          {rank}
        </TableCell>
        <TableCell sx={tableCeilStyle} onClick={() => handleClick(id || "")}>
          {symbol}
        </TableCell>
        <TableCell sx={tableCeilStyle} onClick={() => handleClick(id || "")}>
          {name}
        </TableCell>
        <TableCell sx={tableCeilStyle} onClick={() => handleClick(id || "")}>
          {vwap24Hr} $
        </TableCell>
        <TableCell sx={tableCeilStyle} onClick={() => handleClick(id || "")}>
          {changePercent24Hr} %
        </TableCell>
        <TableCell sx={tableCeilStyle} onClick={() => handleClick(id || "")}>
          {marketCapUsd} млрд $
        </TableCell>
        <TableCell sx={tableCeilStyle} onClick={() => handleClick(id || "")}>
          {priceUsd} $
        </TableCell>
        <TableCell sx={tableCeilStyle} onClick={() => addCoin(id || "")}>
          <Button variant="contained" sx={buttonStyle}>
            BUY
          </Button>
        </TableCell>
      </TableRow>
    </>
  );
};

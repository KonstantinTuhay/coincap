import { JSX } from "react";
import { Data } from "../../redux/apiCoins";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/hooks";
import { getCoin } from "../../redux/slices/getDetailsCoin";

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
    // supply,
    // maxSupply,
    marketCapUsd,
    // volumeUsd24Hr,
    priceUsd,
    changePercent24Hr,
    vwap24Hr,
    // explorer,
  } = coin;
  return (
    <>
      <tr onClick={() => handleClick(id)}>
        <td>{rank}</td>
        <td>{symbol}</td>
        <td>{name}</td>
        <td>{vwap24Hr} $</td>
        <td>{changePercent24Hr} $</td>
        <td>{marketCapUsd} млрд $</td>
        <td>{priceUsd} $</td>
      </tr>
      <td onClick={() => addCoin(id)}>+</td>
    </>
  );
};

import { JSX } from "react";
import { Data } from "../../redux/apiCoins";

type Coin = {
  coin: Data;
};

export const CoinData = ({ coin }: Coin): JSX.Element => {
  const {
    id,
    rank,
    symbol,
    name,
    supply,
    maxSupply,
    marketCapUsd,
    volumeUsd24Hr,
    priceUsd,
    changePercent24Hr,
    vwap24Hr,
    explorer,
  } = coin;
  return (
    <tr>
      <td>{rank}</td>
      <td>{symbol}</td>
      <td>{name}</td>
      <td>{volumeUsd24Hr}</td>
      <td>{changePercent24Hr}</td>
      <td>{marketCapUsd}</td>
      <td>{priceUsd}</td>
      <td>+</td>
    </tr>
  );
};

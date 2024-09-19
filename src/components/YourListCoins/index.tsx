import { JSX } from "react";

export const YourListCoins = ({ yourCoin }): JSX.Element => {
  console.log(yourCoin);

  const {
    // id,
    // rank,
    // symbol,
    name,
    // supply,
    // maxSupply,
    // marketCapUsd,
    // volumeUsd24Hr,
    priceUsd,
    // changePercent24Hr,
    // vwap24Hr,
    // explorer,
    quantity,
  } = yourCoin;

  return (
    <div>
      <tr>
        <td>{name}</td>
        <td>{priceUsd}</td>
        <td>{quantity}</td>
        <td>{priceUsd}</td>
      </tr>
    </div>
  );
};

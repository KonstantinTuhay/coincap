import { JSX } from "react";
import { useAppDispatch } from "../../hooks/hooks";
import { sellCoin } from "../../redux/slices/listMyCoins";

export const YourListCoins = ({ yourCoin }): JSX.Element => {
  console.log(yourCoin);

  const {
    id,
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

  const dispatch = useAppDispatch();

  const handleSell = (id: string) => {
    dispatch(sellCoin(id));
  };

  return (
    <div>
      <tr>
        <td>{name}</td>
        <td>{priceUsd}</td>
        <td>{quantity}</td>
        <td>{priceUsd}</td>
        <button onClick={() => handleSell(id)}>sell</button>
      </tr>
    </div>
  );
};

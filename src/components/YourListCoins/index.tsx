import { JSX } from "react";
import { useAppDispatch } from "../../hooks/hooks";
import { InitialState, sellCoin } from "../../redux/slices/listMyCoins";

type YourCoin = {
  yourCoin: InitialState;
};

export const YourListCoins = ({ yourCoin }: YourCoin): JSX.Element => {
  const { name, priceUsd, quantity, coinId } = yourCoin;

  const dispatch = useAppDispatch();

  const handleSell = (coinId: string) => {
    dispatch(sellCoin(coinId));
  };

  return (
    <div>
      <tr>
        <td>{name}</td>
        <td>{priceUsd}</td>
        <td>{quantity}</td>
        <td>{priceUsd}</td>
        <button onClick={() => handleSell(coinId || "")}>sell</button>
      </tr>
    </div>
  );
};

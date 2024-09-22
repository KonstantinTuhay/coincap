import { JSX } from "react";
import { useAppSelector } from "../../hooks/hooks";
import { YourListCoins } from "../YourListCoins";
import { useNavigate } from "react-router-dom";

export const YourBriefcase = (): JSX.Element => {
  const getYourCoins = useAppSelector((state) => state.listMyCoins);
  const getTotal = useAppSelector((state) => state.listMyCoins);
  console.log(getTotal);
  const amounts = getTotal
    ?.reduce((accum, item) => accum + +item.priceUsd * +item.quantity, 0)
    .toFixed(2);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div>
      <h2>Investment Portfolio</h2>

      <button onClick={() => handleClick()}>Back</button>

      <table style={{ border: "1" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {getYourCoins?.length ? (
            getYourCoins.map((yourCoin) => (
              <YourListCoins key={crypto.randomUUID()} yourCoin={yourCoin} />
            ))
          ) : (
            <h2>You don't have coins</h2>
          )}
        </tbody>
      </table>

      <p>Total: {amounts} $</p>
    </div>
  );
};

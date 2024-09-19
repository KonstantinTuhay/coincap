import { JSX } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/hooks";

export const YourBriefcase = (): JSX.Element => {
  const getYourCoins = useAppSelector((state) => state.listMyCoins);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div>
      <h2>Investment Portfolio</h2>
      <button onClick={() => handleClick()}>Back</button>
      {getYourCoins?.length ? (
        getYourCoins.map((yourCoin) => (
          <YourListCoins key={yourCoin.id} yourCoin={yourCoin} />
        ))
      ) : (
        <h2>You don't have coins</h2>
      )}
      <p>Total: number $</p>
    </div>
  );
};

import { JSX } from "react";
import { useAppSelector } from "../../hooks/hooks";
import { useNavigate } from "react-router-dom";

export const Briefcase = (): JSX.Element => {
  const getTotal = useAppSelector((state) => state.listMyCoins);
  const amounts = getTotal
    .reduce((accum, item) => accum + +item.priceUsd * +item.quantity, 0)
    .toFixed(2);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/yourbriefcase");
  };

  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <div onClick={() => handleClick()}>Портфель</div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <p>Total:</p>
        <p>{amounts} USD</p>
      </div>
    </div>
  );
};

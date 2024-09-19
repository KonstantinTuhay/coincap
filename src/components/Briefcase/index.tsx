import { JSX } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/hooks";

export const Briefcase = (): JSX.Element => {
  const getTotal = useAppSelector((state) => state.listMyCoins);
  const amounts = getTotal.reduce(
    (accum, item) => (accum += +item.priceUsd),
    0
  );
  console.log(amounts);

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

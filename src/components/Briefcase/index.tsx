import { JSX } from "react";
import { useAppSelector } from "../../hooks/hooks";
import { useNavigate } from "react-router-dom";
import WalletIcon from "@mui/icons-material/Wallet";

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
      <div onClick={() => handleClick()}>
        <WalletIcon />
      </div>
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

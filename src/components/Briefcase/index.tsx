import { JSX } from "react";
import { useAppSelector } from "../../hooks/hooks";
import { useNavigate } from "react-router-dom";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import { Typography } from "@mui/material";

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
        marginRight: "300px",
      }}
    >
      <div style={{ cursor: "pointer" }} onClick={() => handleClick()}>
        <WorkOutlineOutlinedIcon sx={{ fontSize: 80 }} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "15px 0px 15px 10px",
        }}
      >
        <Typography>Total:</Typography>
        <Typography>{amounts} USD</Typography>
      </div>
    </div>
  );
};

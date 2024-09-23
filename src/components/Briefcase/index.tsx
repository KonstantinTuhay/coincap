import { JSX, useState } from "react";
import { useAppSelector } from "../../hooks/hooks";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import { Box, Typography } from "@mui/material";
import { YourBriefcaseModal } from "../YourBriefCaseModal";

export const Briefcase = (): JSX.Element => {
  const [open, setOpen] = useState(false);

  const getTotal = useAppSelector((state) => state.listMyCoins);
  const amounts = getTotal
    .reduce((accum, item) => accum + +item.priceUsd * +item.quantity, 0)
    .toFixed(2);

  const handleClick = () => {
    console.log(1111);
    setOpen(true);
    console.log(open);

    console.log(1111);
  };

  return (
    <>
      <YourBriefcaseModal open={open} setOpen={setOpen} />

      <div
        style={{
          display: "flex",
          marginRight: "300px",
        }}
      >
        <div style={{ cursor: "pointer" }}>
          <WorkOutlineOutlinedIcon
            sx={{ fontSize: 80 }}
            onClick={() => handleClick()}
          />
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
    </>
  );
};

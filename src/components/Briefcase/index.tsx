import { JSX, useState } from "react";
import { useAppSelector } from "../../hooks/hooks";
import { YourBriefcaseModal } from "../YourBriefCaseModal";
import { countedMoney } from "../../helpers/countedMoney";
import { Box, Typography } from "@mui/material";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import styles from "../../styles/Briefcase/index.module.css";

export const Briefcase = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);

  const getTotal = useAppSelector((state) => state.listMyCoins);
  const amounts = countedMoney(getTotal);

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <>
      <YourBriefcaseModal open={open} setOpen={setOpen} amounts={amounts} />

      <Box
        className={styles.box}
        // sx={{
        //   display: "flex",
        //   marginRight: "300px",
        // }}
      >
        <Box sx={{ cursor: "pointer" }}>
          <WorkOutlineOutlinedIcon
            className={styles.boxCase}
            // sx={{ fontSize: 80 }}
            onClick={() => handleClick()}
          />
        </Box>
        <Box
          className={styles.boxText}
          // sx={{
          //   display: "flex",
          //   flexDirection: "column",
          //   margin: "15px 0px 15px 10px",
          // }}
        >
          <Typography>Total:</Typography>
          <Typography>{amounts} USD</Typography>
        </Box>
      </Box>
    </>
  );
};

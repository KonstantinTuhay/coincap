import { JSX } from "react";
import { PopularСryptoCurrencies } from "../PopularСryptoCurrencies";
import { Briefcase } from "../Briefcase";
import { Outlet } from "react-router-dom";
import { Box, Container } from "@mui/material";
import styles from "../../styles/Header/index.module.css";

export const Header = (): JSX.Element => {
  return (
    <Container maxWidth="lg">
      <Box
        className={styles.box}
        // style={{
        //   display: "flex",
        //   justifyContent: "space-between",
        //   marginTop: "15px",
        // }}
      >
        <PopularСryptoCurrencies />
        <Briefcase />
      </Box>

      <Outlet />
    </Container>
  );
};

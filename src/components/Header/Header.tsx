import { JSX } from "react";
import { PopularСryptoCurrencies } from "../PopularСryptoCurrencies";
import { Briefcase } from "../Briefcase";
import { Outlet } from "react-router-dom";
import Container from "@mui/material/Container";
import { Box } from "@mui/material";

export const Header = (): JSX.Element => {
  return (
    <>
      <Container maxWidth="lg">
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "15px",
          }}
        >
          <PopularСryptoCurrencies />
          <Briefcase />
        </Box>

        <Outlet />
      </Container>
    </>
  );
};

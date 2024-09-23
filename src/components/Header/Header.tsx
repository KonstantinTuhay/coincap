import { JSX } from "react";
import { PopularСryptoCurrencies } from "../PopularСryptoCurrencies";
import { Briefcase } from "../Briefcase";
import { Outlet } from "react-router-dom";
import Container from "@mui/material/Container";

export const Header = (): JSX.Element => {
  return (
    <>
      <Container maxWidth="lg">
        <div
          style={{
            display: "flex",
          }}
        >
          <PopularСryptoCurrencies />
          <Briefcase />
        </div>

        <Outlet />
      </Container>
    </>
  );
};

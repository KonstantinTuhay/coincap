import { JSX } from "react";
import { PopularСryptoCurrencies } from "../PopularСryptoCurrencies";
import { Briefcase } from "../Briefcase";
import { Outlet } from "react-router-dom";

export const Header = (): JSX.Element => {
  return (
    <>
      <div
        style={{
          display: "flex",
        }}
      >
        <PopularСryptoCurrencies />
        <Briefcase />
      </div>

      <Outlet />
    </>
  );
};

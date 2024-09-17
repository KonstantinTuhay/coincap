import { JSX } from "react";
import { Outlet } from "react-router-dom";
import { PopularСryptoCurrencies } from "../PopularСryptoCurrencies";
import { Briefcase } from "../Briefcase";

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

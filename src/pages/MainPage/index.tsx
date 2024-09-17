import { JSX } from "react";
import { Table } from "../../components/Table";
import { SwitchCoins } from "../../components/SwitchCoins";

export const MainPage = (): JSX.Element => {
  return (
    <>
      <Table />
      <SwitchCoins />
    </>
  );
};

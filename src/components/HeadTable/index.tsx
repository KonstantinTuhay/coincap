import { JSX } from "react";

export const HeadTable = (): JSX.Element => {
  return (
    <tr>
      <th>№</th>
      <th></th>
      <th>Name</th>
      <th>VWAP (24HR)</th>
      <th>Change (24HR)</th>
      <th>Market Cap</th>
      <th>Price</th>
      <th></th>
    </tr>
  );
};

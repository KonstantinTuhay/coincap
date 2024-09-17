import { JSX } from "react";

export const CoinData = ({ coin }): JSX.Element => {
  const { id, scr, name, vwap, change, marketCap, price } = coin;
  return (
    <tr>
      <td>{id}</td>
      <td>{scr}</td>
      <td>{name}</td>
      <td>{vwap}</td>
      <td>{change}</td>
      <td>{marketCap}</td>
      <td>{price}</td>
      <td>+</td>
    </tr>
  );
};

import { JSX } from "react";
import { useNavigate } from "react-router-dom";

export const CoinData = ({ coin }): JSX.Element => {
  const { id, scr, name, vwap, change, marketCap, price } = coin;

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/coininformation");
  };

  return (
    <tr>
      <div onClick={() => handleClick()}>
        <td>{id}</td>
        <td>{scr}</td>
        <td>{name}</td>
        <td>{vwap}</td>
        <td>{change}</td>
        <td>{marketCap}</td>
        <td>{price}</td>
      </div>
      <td>+</td>
    </tr>
  );
};

import { JSX } from "react";
import { useNavigate } from "react-router-dom";

export const YourBriefcase = (): JSX.Element => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div>
      <h2>Investment Portfolio</h2>
      <button onClick={() => handleClick()}>Back</button>
      <p>LIST</p>
      <p>Total: number $</p>
    </div>
  );
};

import { JSX } from "react";
import { useNavigate } from "react-router-dom";

export const Briefcase = (): JSX.Element => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/yourbriefcase");
  };

  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <div onClick={() => handleClick()}>Портфель</div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <p>Total:</p>
        <p>SUM USD</p>
      </div>
    </div>
  );
};

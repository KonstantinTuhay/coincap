import { JSX } from "react";

export const Briefcase = (): JSX.Element => {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <p>Портфель</p>
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

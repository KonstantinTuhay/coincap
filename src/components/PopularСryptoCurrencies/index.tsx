import { JSX } from "react";

export const PopularСryptoCurrencies = (): JSX.Element => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <p>Popular cryptocurrencies:</p>
      <div
        style={{
          display: "flex",
        }}
      >
        <p
          style={{
            margin: "5px",
          }}
        >
          Bitcoin
        </p>
        <p
          style={{
            margin: "5px",
          }}
        >
          Etherium
        </p>
        <p
          style={{
            margin: "5px",
          }}
        >
          Tether
        </p>
      </div>
    </div>
  );
};

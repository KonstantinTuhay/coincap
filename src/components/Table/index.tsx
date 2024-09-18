import { JSX } from "react";
import { HeadTable } from "../HeadTable";
import { CoinData } from "../CoinData";
import { useGetCoinsQuery } from "../../redux/apiCoins";

export const Table = (): JSX.Element => {
  const { data, error, isLoading } = useGetCoinsQuery();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    if ("status" in error) {
      const errMsg =
        "error" in error ? error.error : JSON.stringify(error.data);

      return (
        <div>
          <div>An error has occurred:</div>
          <div>{errMsg}</div>
        </div>
      );
    }
    return <div>Error: {error.message}</div>;
  }

  return (
    <table style={{ border: "1" }}>
      <thead>
        <HeadTable />
      </thead>
      <tbody>
        {data?.map((coin) => {
          return <CoinData key={crypto.randomUUID()} coin={coin} />;
        })}
      </tbody>
    </table>
  );
};

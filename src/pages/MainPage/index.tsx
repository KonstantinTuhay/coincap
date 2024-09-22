import { JSX, useEffect } from "react";
import { SwitchCoins } from "../../components/SwitchCoins";
import { useGetCoinsQuery } from "../../redux/apiCoins";
import { useAppDispatch } from "../../hooks/hooks";
import { setPopularCoins } from "../../redux/slices/popularCoins";
import { changePrice } from "../../helpers/changePrice";
import { Data } from "../../redux/apiCoins";

// export type NewData = {
//   id: string;
//   rank: string;
//   symbol: string;
//   name: string;
//   supply: string;
//   maxSupply: string;
//   marketCapUsd: string;
//   volumeUsd24Hr: string;
//   priceUsd: string;
//   changePercent24Hr: string;
//   vwap24Hr: string;
//   explorer: string;
// };

export const MainPage = (): JSX.Element => {
  const { data, error, isLoading } = useGetCoinsQuery();
  const newData: Data[] = changePrice(data || []);
  console.log(newData);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setPopularCoins(newData?.slice(0, 3) || []));
  }, [newData, dispatch]);

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
    <>
      <SwitchCoins newData={newData || []} />
    </>
  );
};

import { JSX, useEffect } from "react";
import { SwitchCoins } from "../../components/SwitchCoins";
import { useGetCoinsQuery } from "../../redux/apiCoins";
import { useAppDispatch } from "../../hooks/hooks";
import { setPopularCoins } from "../../redux/slices/popularCoins";

export const MainPage = (): JSX.Element => {
  const { data, error, isLoading } = useGetCoinsQuery();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setPopularCoins(data?.slice(0, 3) || []));
  }, [data, dispatch]);

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
      <SwitchCoins data={data || []} />
    </>
  );
};

import { JSX, ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { getQuantity } from "../../redux/slices/getQuantityCoins";
import { getYourCoin } from "../../redux/slices/listMyCoins";
import { useGetDetailsCoinQuery } from "../../redux/apiCoins";

export const AmountForm = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const currentQuantity = useAppSelector((state) => state.getQuantityCoins);
  const currentId = useAppSelector((state) => state.getDetailsCoin);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(getQuantity(e?.target.value));
  };

  const { data, error, isLoading } = useGetDetailsCoinQuery(currentId);

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

  const setQuantity = () => {
    const newObj = { ...data, quantity: currentQuantity };
    dispatch(getYourCoin(newObj));
  };

  return (
    <>
      <p>Enter quantity:</p>

      <input
        placeholder="Введите количество"
        onChange={(e) => handleChange(e)}
      />
      <button onClick={() => setQuantity()}>Купить</button>
    </>
  );
};

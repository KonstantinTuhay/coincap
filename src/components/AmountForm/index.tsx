import { JSX, ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { getQuantity } from "../../redux/slices/getQuantityCoins";
import { getYourCoin } from "../../redux/slices/listMyCoins";
import { useGetDetailsCoinQuery } from "../../redux/apiCoins";
import { changePrice } from "../../helpers/changePrice";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export const AmountForm = (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const currentQuantity = useAppSelector((state) => state.getQuantityCoins);
  const currentId = useAppSelector((state) => state.getDetailsCoin);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(getQuantity(e?.target.value));
  };

  const { data, error, isLoading } = useGetDetailsCoinQuery(currentId);
  console.log(Array.isArray(data));
  console.log(data);
  const newData = changePrice(data);

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
    const newObj = {
      ...newData,
      quantity: currentQuantity,
      coinId: crypto.randomUUID(),
    };
    dispatch(getYourCoin(newObj));
    navigate("/");
  };

  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    // dispatch(getQuantity(data.test));

    const newObj = {
      ...newData,
      quantity: data.test,
      coinId: crypto.randomUUID(),
    };
    dispatch(getYourCoin(newObj));
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p>Enter quantity:</p>

      {/* <input
        placeholder="Введите количество"
        onChange={(e) => handleChange(e)}
      /> */}

      <input
        placeholder="Введите количество"
        type="text"
        {...register("test", {
          // onChange: (e) => handleChange(e),
          pattern: /^\d+([.]?\d+)?$/,
          // valueAsNumber: true,
        })}
      />
      {errors.test && <span>Введите целое или дробное число через точку</span>}

      <input
        type="submit"
        //  onClick={() => setQuantity()}
      />
    </form>
  );
};

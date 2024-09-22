import { JSX } from "react";
import { changePriceObject } from "../../helpers/changePriceObject";
import { useGetDetailsCoinQuery } from "../../redux/apiCoins";
import { getYourCoin } from "../../redux/slices/listMyCoins";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  test: number;
};

export const AmountForm = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const currentId = useAppSelector((state) => state.getDetailsCoin);

  const { data, error, isLoading } = useGetDetailsCoinQuery(currentId);
  console.log(Array.isArray(data));
  console.log(data);
  const newData = changePriceObject(data || {});

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

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);

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

      <input
        placeholder="Введите количество"
        type="text"
        {...register("test", {
          pattern: /^\d+([.]?\d+)?$/,
        })}
      />
      {errors.test && <span>Введите целое или дробное число через точку</span>}

      <input type="submit" />
    </form>
  );
};

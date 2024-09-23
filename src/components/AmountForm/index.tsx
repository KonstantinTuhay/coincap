import { JSX } from "react";
import { changePriceObject } from "../../helpers/changePriceObject";
import { useGetDetailsCoinQuery } from "../../redux/apiCoins";
import { getYourCoin } from "../../redux/slices/listMyCoins";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";

type Inputs = {
  test: number;
};

export const AmountForm = ({ setOpen }): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const dispatch = useAppDispatch();
  const currentId = useAppSelector((state) => state.getDetailsCoin);

  const { data, error, isLoading } = useGetDetailsCoinQuery(currentId);
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
    const newObj = {
      ...newData,
      quantity: data.test,
      coinId: crypto.randomUUID(),
    };
    dispatch(getYourCoin(newObj));
    setOpen(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography>Enter quantity:</Typography>

      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        placeholder="Введите количество"
        variant="filled"
        size="small"
        sx={{
          m: "20px 0px",
          border: "1px solid #028202e0",
          borderRadius: "10px 0px 0px 10px",
        }}
        type="text"
        {...register("test", {
          pattern: /^\d+([.]?\d+)?$/,
        })}
      />

      <Button
        sx={{
          m: "20px 0px",
          border: "1px solid #028202e0",
          backgroundColor: "#028202e0",
          borderRadius: "0px 10px 10px 0px",
          color: "white",
          height: 42,
        }}
        type="submit"
      >
        BUY
      </Button>

      {errors.test && (
        <Alert variant="outlined" severity="warning">
          Введите целое или дробное число через точку
        </Alert>
      )}
    </form>
  );
};

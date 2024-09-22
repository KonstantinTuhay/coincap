import { JSX } from "react";
import { AmountForm } from "../AmountForm";
import { useAppSelector } from "../../hooks/hooks";
import { useGetDetailsCoinQuery } from "../../redux/apiCoins";
import { useNavigate } from "react-router-dom";

export const AddCoin = (): JSX.Element => {
  const currentId = useAppSelector((state) => state.getDetailsCoin);

  const navigate = useNavigate();

  const clickBack = () => {
    navigate("/");
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

  return (
    <div>
      <h2>Buy {data?.name}</h2>

      <div>
        <AmountForm />
      </div>

      <button onClick={() => clickBack()}>Назад</button>
    </div>
  );
};

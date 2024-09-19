import { JSX, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useGetDetailsCoinQuery } from "../../redux/apiCoins";
import { useAppSelector } from "../../hooks/hooks";

export const NameCurrency = (): JSX.Element => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  const currentId = useAppSelector((state) => state.getDetailsCoin);
  console.log();

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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e?.target.value);
  };

  return (
    <div>
      <p>{data?.symbol} </p>
      <p>{data?.name} / USD</p>
      <div>
        <p>График ----------------------------------</p>
      </div>
      <div>
        <p>Введите количество</p>
        <input
          placeholder="Введите количество"
          onChange={(e) => handleChange(e)}
        />
        <button>Купить</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Информация</th>
            <th>Данные о валюте</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Доступное предложение для торговли</td>
            <td>19.3 млн</td>
          </tr>
          <tr>
            <td>Общее количество выпущенных активов</td>
            <td>19.3 млн</td>
          </tr>
          <tr>
            <td>Объем торгов за последние 24 часа</td>
            <td>19.3 млн</td>
          </tr>
          <tr>
            <td>Средняя цена по объёму за последние 24 часа</td>
            <td>19.3 млн</td>
          </tr>
          <tr>
            <td>Процентное изменения цены за последние 24 часа</td>
            <td>19.3 млн</td>
          </tr>
          <tr>
            <td>Сайт</td>
            <td>19.3 млн</td>
          </tr>
        </tbody>
      </table>
      <button onClick={() => handleClick()}>Назад</button>
    </div>
  );
};

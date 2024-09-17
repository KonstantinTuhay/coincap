import { JSX } from "react";

export const NameCurrency = (): JSX.Element => {
  return (
    <div>
      <p>SymbolCurrency (BTC)</p>
      <p>name(Bitcoin) / USD</p>
      <div>
        <p>График ----------------------------------</p>
      </div>
      <div>
        <p>Введите количество</p>
        <input placeholder="Введите количество" />
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
      <button>Назад</button>
    </div>
  );
};

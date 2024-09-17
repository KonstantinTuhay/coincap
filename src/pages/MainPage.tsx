import { JSX } from "react";

export const MainPage = (): JSX.Element => {
  return (
    <>
      <table style={{ border: "1" }}>
        <thead>
          <tr>
            <th>№</th>
            <th></th>
            <th>Name</th>
            <th>VWAP (24HR)</th>
            <th>Change (24HR)</th>
            <th>Market Cap</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>BTC</td>
            <td>Bitcoin</td>
            <td>22.000</td>
            <td>2.02$</td>
            <td>446.4</td>
            <td>23162.22$</td>
            <td>+</td>
          </tr>
          <tr>
            <td>1</td>
            <td>BTC</td>
            <td>Bitcoin</td>
            <td>22.000</td>
            <td>2.02$</td>
            <td>446.4</td>
            <td>23162.22$</td>
            <td>+</td>
          </tr>
          <tr>
            <td>1</td>
            <td>BTC</td>
            <td>Bitcoin</td>
            <td>22.000</td>
            <td>2.02$</td>
            <td>446.4</td>
            <td>23162.22$</td>
            <td>+</td>
          </tr>
          <tr>
            <td>1</td>
            <td>BTC</td>
            <td>Bitcoin</td>
            <td>22.000</td>
            <td>2.02$</td>
            <td>446.4</td>
            <td>23162.22$</td>
            <td>+</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

import { JSX, useState } from "react";
// import { useAppSelector } from "../../hooks/hooks";
import { Coins } from "../../redux/apiCoins";
import { HeadTable } from "../HeadTable";
import { CoinData } from "../CoinData";

export const SwitchCoins = ({ data }: Coins): JSX.Element => {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  // Подготовим данные
  // const data = useAppSelector((state) => state.allCoins); // Твой массив данных

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data.slice(startIndex, endIndex);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <table style={{ border: "1" }}>
        <thead>
          <HeadTable />
        </thead>
        <tbody>
          {currentItems?.length ? (
            currentItems.map((coin) => <CoinData key={coin.id} coin={coin} />)
          ) : (
            <h2>No coins</h2>
          )}
        </tbody>
      </table>

      <div>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

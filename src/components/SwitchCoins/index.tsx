import { JSX, useState } from "react";
// import { Coins } from "../../redux/apiCoins";
import { HeadTable } from "../HeadTable";
// import { Data } from "../CoinData";
import { NewData } from "../../pages/MainPage";
import { CoinData } from "../CoinData";

type DataSwitch = {
  newData: NewData[];
};

export const SwitchCoins = ({ newData }: DataSwitch): JSX.Element => {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = newData?.slice(startIndex, endIndex);

  const totalPages = Math.ceil(newData?.length / itemsPerPage);

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
            currentItems.map((coin) => (
              <CoinData key={crypto.randomUUID()} coin={coin} />
            ))
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

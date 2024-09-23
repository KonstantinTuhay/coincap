import { JSX, useState } from "react";
import { HeadTable } from "../HeadTable";
import { CoinData } from "../CoinData";
import { Data } from "../../redux/apiCoins";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";

type DataSwitch = {
  newData: Data[];
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
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <HeadTable />
          </TableHead>
          <TableBody>
            {currentItems?.length ? (
              currentItems.map((coin) => (
                <CoinData key={crypto.randomUUID()} coin={coin} />
              ))
            ) : (
              <h2>No coins</h2>
            )}
          </TableBody>
        </Table>
      </TableContainer>

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

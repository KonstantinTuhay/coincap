import { JSX, useState } from "react";
import { HeadTable } from "../HeadTable";
import { CoinData } from "../CoinData";
import { Data } from "../../redux/apiCoins";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableBody,
  Stack,
  Button,
  Box,
  Typography,
} from "@mui/material";

type DataSwitch = {
  newData: Data[];
};

const hoverButton = {
  "&:hover": {
    borderRadius: "100%",
    backgroundColor: "#00000016",
    transition: "1s",
  },
  "&:disabled": {
    color: "black",
    backgroundColor: "#00000046",
    transition: "2s",
  },
  padding: "14px 8px",
  borderRadius: "100%",
  color: "#000000a3",
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
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
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
              <Typography variant="h3">No coins</Typography>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <Box>
        <Stack sx={{ display: "flex", flexDirection: "row", mt: "10px" }}>
          {Array.from({ length: totalPages }, (_, index) => (
            <Button
              sx={hoverButton}
              variant="text"
              key={index}
              onClick={() => handlePageChange(index + 1)}
              disabled={currentPage === index + 1}
            >
              {index + 1}
            </Button>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

import { JSX } from "react";
import { useAppSelector } from "../../hooks/hooks";
import { AmountForm } from "../AmountForm";
import { changePriceObject } from "../../helpers/changePriceObject";
import { Data, useGetDetailsCoinQuery } from "../../redux/apiCoins";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { Chart } from "../Chart";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";

export const NameCurrency = (): JSX.Element => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  const currentId = useAppSelector((state) => state.getDetailsCoin);

  const { data, error, isLoading } = useGetDetailsCoinQuery(currentId);
  const newData: Data = changePriceObject(data || {});

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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Button
        sx={{ position: "absolute", left: "350px", top: "110px" }}
        variant="outlined"
        onClick={() => handleClick()}
      >
        Back
      </Button>

      <Box>
        <Typography variant="h5" sx={{ mt: "10px", textAlign: "center" }}>
          {newData?.symbol}{" "}
        </Typography>
        <Typography>{newData?.name} / USD</Typography>
      </Box>

      <Box>
        <Chart />
      </Box>

      <Box sx={{ mt: "10px" }}>
        <AmountForm />
      </Box>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Информация</TableCell>
              <TableCell>Данные о валюте</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell>Цена</TableCell>
              <TableCell>{newData.priceUsd} $</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Доступное предложение для торговли</TableCell>
              <TableCell>{newData.supply} млн. $</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Общее количество выпущенных активов</TableCell>
              <TableCell>{newData.maxSupply} млн. $</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Объем торгов за последние 24 часа</TableCell>
              <TableCell>{newData.volumeUsd24Hr} млрд. $</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Средняя цена по объёму за последние 24 часа</TableCell>
              <TableCell>{newData.vwap24Hr} $</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Процентное изменения цены за последние 24 часа
              </TableCell>
              <TableCell>{newData.changePercent24Hr} %</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Сайт</TableCell>
              <TableCell>
                <Link
                  href={newData.explorer}
                  underline="none"
                  sx={{ color: "#000000" }}
                >
                  {newData.explorer}
                </Link>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

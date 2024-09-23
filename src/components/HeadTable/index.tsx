import { JSX } from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

export const HeadTable = (): JSX.Element => {
  return (
    <TableRow>
      <TableCell>№</TableCell>
      <TableCell></TableCell>
      <TableCell>Name</TableCell>
      <TableCell>VWAP (24HR)</TableCell>
      <TableCell>Change (24HR)</TableCell>
      <TableCell>Market Cap</TableCell>
      <TableCell>Price</TableCell>
      <TableCell></TableCell>
    </TableRow>
  );
};

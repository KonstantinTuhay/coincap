import { JSX } from "react";
import { useAppSelector } from "../../hooks/hooks";
import { YourListCoins } from "../YourListCoins";
import {
  Box,
  Modal,
  Typography,
  Button,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MoneyOffCsredOutlinedIcon from "@mui/icons-material/MoneyOffCsredOutlined";
import { ModalOpenClose } from "../AddCoinModal";

const closeButtonStyled = {
  "&:hover": {
    backgroundColor: "#E84034",
    border: "1px solid #E84034",
    color: "white",
  },
  position: "absolute",
  top: 5,
  right: 5,
  border: "1px solid  #000000",
  borderRadius: "20px",
  color: "black",
};

export const YourBriefcaseModal = ({
  open,
  setOpen,
  amounts,
}: ModalOpenClose): JSX.Element => {
  const getYourCoins = useAppSelector((state) => state.listMyCoins);

  const clickBack = () => {
    setOpen(false);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 700,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    textAlign: "center",
    borderRadius: "20px",
  };

  const handleClose = () => setOpen(false);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography variant="h4">Investment Portfolio</Typography>

        <Button sx={closeButtonStyled} onClick={() => clickBack()}>
          <CloseIcon />
        </Button>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt: "15px",
          }}
        >
          {getYourCoins?.length ? (
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {getYourCoins.map((yourCoin) => (
                    <YourListCoins
                      key={crypto.randomUUID()}
                      yourCoin={yourCoin}
                    />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
            <Box sx={{ mt: "10px" }}>
              <MoneyOffCsredOutlinedIcon sx={{ fontSize: 40 }} />
              <Typography variant="h5">You don't have coins</Typography>
            </Box>
          )}

          <Typography sx={{ mt: "20px" }}>Total: {amounts} $</Typography>
        </Box>
      </Box>
    </Modal>
  );
};

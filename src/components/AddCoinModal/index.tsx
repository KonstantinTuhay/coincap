import { JSX } from "react";
import { AmountForm } from "../AmountForm";
import { useAppSelector } from "../../hooks/hooks";
import { useGetDetailsCoinQuery } from "../../redux/apiCoins";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { Button, keyframes } from "@mui/material";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

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

const anim = keyframes`
   0% {
    transform: perspective(23rem) rotateY(0deg);
  }
  100% {
    transform: perspective(10rem) rotateY(360deg);
  }
`;

export const AddCoinModal = ({ open, setOpen }): JSX.Element => {
  const currentId = useAppSelector((state) => state.getDetailsCoin);

  const clickBack = () => {
    setOpen(false);
  };

  const { data, error, isLoading } = useGetDetailsCoinQuery(currentId);

  if (isLoading) {
    return (
      <MonetizationOnOutlinedIcon
        style={{
          color: "#ffd900",
          fontSize: "100px",
          position: "relative",
          left: "50%",
          top: 150,
          animation: `${anim} 1s linear infinite`,
          transition: `all 0.5s ease`,
        }}
      />
    );
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

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    textAlign: "center",
    borderRadius: "20px",
  };
  const handleClose = () => setOpen(false);

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h4">Buy {data?.name}</Typography>

          <Button sx={closeButtonStyled} onClick={() => clickBack()}>
            <CloseIcon />
          </Button>

          <Box sx={{ mt: 5 }}>
            <AmountForm setOpen={setOpen} />
          </Box>
        </Box>
      </Modal>
    </>
  );
};

import { JSX, useEffect } from "react";
import { SwitchCoins } from "../../components/SwitchCoins";
import { useAppDispatch } from "../../hooks/hooks";
import { setPopularCoins } from "../../redux/slices/popularCoins";
import { changePriceArray } from "../../helpers/changePriceArray";
import { Data, useGetCoinsQuery } from "../../redux/apiCoins";
import Container from "@mui/material/Container";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { keyframes } from "@mui/material";

const anim = keyframes`
   0% {
    transform: perspective(23rem) rotateY(0deg);
  }
  100% {
    transform: perspective(10rem) rotateY(360deg);
  }
`;

export const MainPage = (): JSX.Element => {
  const { data, error, isLoading } = useGetCoinsQuery();
  const newData: Data[] = changePriceArray(data || []);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setPopularCoins(newData?.slice(0, 3) || []));
  }, [newData, dispatch]);

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

  return (
    <>
      <Container maxWidth="lg">
        <SwitchCoins newData={newData || []} />
      </Container>
    </>
  );
};

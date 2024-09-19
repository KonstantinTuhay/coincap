// import { JSX } from "react";
// import { HeadTable } from "../HeadTable";
// import { CoinData } from "../CoinData";
// // import { useGetCoinsQuery } from "../../redux/apiCoins";
// // import { useAppDispatch } from "../../hooks/hooks";
// // import { setPopularCoins } from "../../redux/slices/popularCoins";
// // import { setAllCoins } from "../../redux/slices/allCoins";
// import { Coins } from "../../redux/apiCoins";

// export const Table = ({ data }: Coins): JSX.Element => {
//   // const { data, error, isLoading } = useGetCoinsQuery();
//   // const dispatch = useAppDispatch();
//   // useEffect(() => {
//   //   dispatch(setPopularCoins(data?.slice(0, 3) || []));
//   //   dispatch(setAllCoins(data || []));
//   // }, [data, dispatch]);
//   // if (isLoading) {
//   //   return <p>Loading...</p>;
//   // }
//   // if (error) {
//   //   if ("status" in error) {
//   //     const errMsg =
//   //       "error" in error ? error.error : JSON.stringify(error.data);
//   //     return (
//   //       <div>
//   //         <div>An error has occurred:</div>
//   //         <div>{errMsg}</div>
//   //       </div>
//   //     );
//   //   }
//   //   return <div>Error: {error.message}</div>;
//   // }
//   // return;
//   // (
//   // <table style={{ border: "1" }}>
//   //   <thead>
//   //     <HeadTable />
//   //   </thead>
//   //   <tbody>
//   //     {data?.length ? (
//   //       data.map((coin) => <CoinData key={coin.id} coin={coin} />)
//   //     ) : (
//   //       <h2>No coins</h2>
//   //     )}
//   //   </tbody>
//   // </table>
//   // );
// };

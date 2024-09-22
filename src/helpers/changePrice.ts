// import { NewData } from "../pages/MainPage";
import { Data } from "../redux/apiCoins";
// type Data = NewData[] | NewData;

export const changePrice = (data: Data[] | Data) => {
  console.log(data);

  const a =
    Array.isArray(data) || data === undefined
      ? data?.map((item) => {
          return {
            ...item,
            vwap24Hr: `${Number(item.vwap24Hr).toFixed(2)}`,
            changePercent24Hr: `${Number(item.changePercent24Hr).toFixed(2)}`,
            marketCapUsd: `${Number(item.marketCapUsd.slice(0, 3)) / 10}`,
            priceUsd: `${Number(item.priceUsd).toFixed(2)}`,
            supply: `${Number(item.supply.slice(0, 3)) / 10}`,
            maxSupply: item.maxSupply
              ? `${Number(item.maxSupply.slice(0, 3)) / 10}`
              : `${20}`,
            volumeUsd24Hr: `${Number(item.volumeUsd24Hr.slice(0, 3)) / 10}`,
          };
        })
      : {
          ...data,
          vwap24Hr: `${Number(data.vwap24Hr).toFixed(2)}`,
          changePercent24Hr: `${Number(data.changePercent24Hr).toFixed(2)}`,
          marketCapUsd: `${Number(data.marketCapUsd.slice(0, 2)).toFixed(1)}`,
          priceUsd: `${Number(data.priceUsd).toFixed(2)}`,
          supply: `${Number(data.supply.slice(0, 3)) / 10}`,
          maxSupply: data.maxSupply
            ? `${Number(data.maxSupply.slice(0, 3)) / 10}`
            : `${20}`,
          volumeUsd24Hr: `${Number(data.volumeUsd24Hr.slice(0, 3)) / 10}`,
        };
  return a;
};

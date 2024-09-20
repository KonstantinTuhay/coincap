export const changePrice = (data) => {
  console.log(data);

  const a =
    Array.isArray(data) || data === undefined
      ? data?.map((item) => {
          return {
            ...item,
            vwap24Hr: Number(item.vwap24Hr).toFixed(2),
            changePercent24Hr: Number(item.changePercent24Hr).toFixed(2),
            marketCapUsd: Number(item.marketCapUsd.slice(0, 2)).toFixed(1),
            priceUsd: Number(item.priceUsd).toFixed(2),
          };
        })
      : {
          ...data,
          vwap24Hr: Number(data.vwap24Hr).toFixed(2),
          changePercent24Hr: Number(data.changePercent24Hr).toFixed(2),
          marketCapUsd: Number(data.marketCapUsd.slice(0, 2)).toFixed(1),
          priceUsd: Number(data.priceUsd).toFixed(2),
        };
  return a;
};

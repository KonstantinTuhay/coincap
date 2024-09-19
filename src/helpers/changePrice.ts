export const changePrice = (data) => {
  return data?.map((item) => {
    return {
      ...item,
      vwap24Hr: Number(item.vwap24Hr).toFixed(2),
      changePercent24Hr: Number(item.changePercent24Hr).toFixed(2),
      marketCapUsd: Number(item.marketCapUsd.slice(0, 2)).toFixed(1),
      priceUsd: Number(item.priceUsd).toFixed(2),
    };
  });
};

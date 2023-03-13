export const transformMarkets = (response = []) => response.map((item) => ({
  id: item?.id,
  name: item?.name,
  image: item.image,
  price: item?.current_price,
}));

export const transformCoin = (response = {}) => {
  const tickers = response?.tickers?.reduce((acc, ticker) => {
    const existing = acc.find((item) => item.market.name === ticker.market.name);

    if (!existing) {
      return [...acc, ticker];
    }

    return acc;
  }, []);

  return {
    id: response?.id,
    image: response?.image?.large,
    name: response?.name,
    prices: response?.market_data?.current_price ?? {},
    tickers: tickers?.map((ticker) => ({
      exchange: ticker?.market?.name,
      volume: ticker?.volume.toFixed(2),
    })),
  };
};

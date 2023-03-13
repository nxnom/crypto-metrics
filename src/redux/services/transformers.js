export const transformMarkets = (response = []) => response.map((item) => ({
  id: item?.id,
  name: item?.name,
  image: item.image,
  price: item?.current_price,
}));

export const transformCoin = (response = {}) => ({
  id: response?.id,
  image: response?.image?.large,
  name: response?.name,
  tickers: response?.tickers?.map((ticker) => ({
    exchange: ticker?.market?.name,
    volume: ticker.volume,
  })),
});

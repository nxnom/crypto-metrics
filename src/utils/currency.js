export const currencies = {
  usd: {
    name: 'US Dollar',
    symbol: '$',
  },
  eur: {
    name: 'Euro',
    symbol: '€',
  },
  jpy: {
    name: 'Japanese Yen',
    symbol: '¥',
  },
  gbp: {
    name: 'British Pound Sterling',
    symbol: '£',
  },
  rub: {
    name: 'Russian Ruble',
    symbol: '₽',
  },
  ngn: {
    name: 'Nigerian Naira',
    symbol: '₦',
  },
  php: {
    name: 'Philippine Peso',
    symbol: '₱',
  },
  thb: {
    name: 'Thai Baht',
    symbol: '฿',
  },
};

export const getSymbol = (currency) => {
  const symb = currencies[currency]?.symbol;
  return symb;
};

export const formatCurrency = (value, currency) => {
  const symbol = getSymbol(currency);
  let formattedValue = value;
  if (value > 0.1) formattedValue = value.toFixed(2);

  return `${formattedValue} ${symbol}`;
};

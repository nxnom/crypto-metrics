import { configureStore } from '@reduxjs/toolkit';

import api from 'src/redux/services/api';
import { transformMarkets, transformCoin } from 'src/redux/services/transformers';

import mockMarkets from 'src/__mocks__/markets.json';
import mockBitcoin from 'src/__mocks__/bitcoin.json';

describe('api', () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        api: api.reducer,
      },
      middleware: (middlewares) => middlewares().concat(api.middleware),
    });
    fetch.resetMocks();
  });

  it('should fetch markets', async () => {
    fetch.mockResponseOnce(JSON.stringify(mockMarkets));

    const markets = await store.dispatch(
      api.endpoints.getMarkets.initiate('usd'),
    );

    const marketData = transformMarkets(mockMarkets);
    expect(markets.data).toEqual(marketData);
  });

  it('should fetch coin', async () => {
    fetch.mockResponseOnce(JSON.stringify(mockBitcoin));

    const coin = await store.dispatch(
      api.endpoints.getCoin.initiate('bitcoin'),
    );

    const coinData = transformCoin(mockBitcoin);
    expect(coin.data).toEqual(coinData);
  });
});

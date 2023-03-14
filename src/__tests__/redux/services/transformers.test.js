import { transformMarkets, transformCoin } from 'src/redux/services/transformers';

import mockMarkets from 'src/__mocks__/markets.json';
import mockBitcoin from 'src/__mocks__/bitcoin.json';

it('transforms markets should match the snapshot', () => {
  const transformedMarkets = transformMarkets(mockMarkets);
  expect(transformedMarkets).toMatchSnapshot();
});

it('transforms coin should match the snapshot', () => {
  const transformedCoin = transformCoin(mockBitcoin);
  expect(transformedCoin).toMatchSnapshot();
});

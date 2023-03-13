import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { transformMarkets, transformCoin } from './transformers';

const baseUrl = 'https://api.coingecko.com/api/v3/coins';

const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getMarkets: builder.query({
      query: () => '/markets?vs_currency=usd&order=market_cap_desc&per_page=41&page=1&sparkline=false&price_change_percentage=24h',
      transformResponse: transformMarkets,
    }),
    getCoin: builder.query({
      query: (id) => `/${id}?localization=en&tickers=true&market_data=false&community_data=false&developer_data=false&sparkline=false`,
      transformResponse: transformCoin,
    }),
  }),
});

// hooks
export const { useGetMarketsQuery, useGetCoinQuery } = api;

export default api;

// selectors
const selectMarketsResult = api.endpoints.getMarkets.select();

export const selectMarkets = (state) => selectMarketsResult(state)?.data ?? [];

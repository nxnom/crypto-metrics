import React from 'react';

import { useGetMarketsQuery, useGetCoinQuery } from 'src/redux/services/api';

function App() {
  const { isLoading, data } = useGetMarketsQuery();
  const { data: dataCoin } = useGetCoinQuery('bitcoin');

  console.log({ isLoading, data, dataCoin });

  if (isLoading) return <div className="App">Loading...</div>;

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;

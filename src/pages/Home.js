import React from 'react';

import MarketCard from 'src/components/MarketCard';
import Title from 'src/components/Title';
import { useGetMarketsQuery } from 'src/redux/services/api';
import styles from './Home.module.css';

function Home() {
  const { data, isLoading } = useGetMarketsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // To create zip-zap pattern in the grid
  const isDark = (i) => {
    const cond = {
      0: [1, 2, 5, 6, 9],
      1: [0, 3, 4, 7, 8],
    };

    return cond[Math.floor(i / 10) % 2].includes(i % 10);
  };

  const rest = data.filter((_, i) => i > 0);

  return (
    <main>
      <MarketCard market={data[0]} expanded />
      <Title>Latest Market Prices</Title>
      <div className={styles.grid}>
        {rest.map((market, i) => (
          <MarketCard key={market.id} market={market} dark={isDark(i)} />
        ))}
      </div>
    </main>
  );
}

export default Home;

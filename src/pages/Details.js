import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useSelector } from 'react-redux';

import Loading from 'src/components/Loading';
import MarketCard from 'src/components/MarketCard';
import Title from 'src/components/Title';
import { selectCurrency } from 'src/redux/filter/filterSlice';
import { useGetCoinQuery } from 'src/redux/services/api';
import styles from './Details.module.css';
import ErrorPage from './ErrorPage';

function Details() {
  const { id } = useParams();
  const currency = useSelector(selectCurrency);

  const {
    data, isLoading, isError, error,
  } = useGetCoinQuery(id);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    if (error.status === 404) return <Navigate to="/404" />;

    return <ErrorPage status={error.status} message={error.error} />;
  }

  return (
    <div>
      <MarketCard market={{ ...data, price: data.prices[currency] ?? 0 }} expanded />
      <Title>Trade Volumes</Title>
      <div>
        {data.tickers.map((ticker) => (
          <div
            key={`${ticker.exchange}-${ticker.volume}`}
            className={styles.row}
          >
            <p className={styles.exchange}>{ticker.exchange}</p>
            <p className={styles.volume}>
              <span>{ticker.volume}</span>
              <Icon
                className={styles.icon}
                icon="material-symbols:arrow-circle-right-outline"
              />
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Details;

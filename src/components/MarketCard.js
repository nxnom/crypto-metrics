import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

import { selectCurrency } from 'src/redux/filter/filterSlice';
import { formatCurrency } from 'src/utils/currency';
import styles from './MarketCard.module.css';

function MarketCard({ market, expanded, dark }) {
  const currency = useSelector(selectCurrency);

  return (
    <Link to={`/coins/${market.id}`}>
      <article
        className={cn(
          styles.card,
          expanded && styles.expanded,
          dark && styles.dark,
        )}
      >
        <div
          className={styles.imgContainer}
          style={{ backgroundImage: `url(${market.image})` }}
        >
          {!expanded && (
            <Icon
              className={styles.icon}
              icon="material-symbols:arrow-circle-right-outline"
            />
          )}
        </div>
        <div className={styles.details}>
          <h2 className={styles.name}>{market.name}</h2>
          <p className={styles.price}>
            {formatCurrency(market.price, currency)}
          </p>
        </div>
      </article>
    </Link>
  );
}

MarketCard.propTypes = {
  market: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  expanded: PropTypes.bool,
  dark: PropTypes.bool,
};

MarketCard.defaultProps = {
  expanded: false,
  dark: false,
};

export default MarketCard;

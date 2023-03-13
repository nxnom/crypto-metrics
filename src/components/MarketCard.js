import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Link } from 'react-router-dom';

import styles from './MarketCard.module.css';

function MarketCard({ market, expanded, dark }) {
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
          {/* TODO: add arrow icon */}
        </div>
        <div className={styles.details}>
          <h2 className={styles.name}>{market.name}</h2>
          <p className={styles.price}>{market.price}</p>
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

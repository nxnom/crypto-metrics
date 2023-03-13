import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './MarketCard.module.css';

function MarketCard({ market, expanded = false, dark = false }) {
  return (
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

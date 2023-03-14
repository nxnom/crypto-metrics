import React from 'react';
import PropTypes from 'prop-types';

import styles from './Title.module.css';

function Title({ children }) {
  return <h3 className={styles.title}>{children}</h3>;
}

Title.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Title;

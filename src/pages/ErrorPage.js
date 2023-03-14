import React from 'react';
import PropTypes from 'prop-types';

import styles from './ErrorPage.module.css';

function ErrorPage({ status, message }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{status}</h1>
      <p className={styles.text}>{message}</p>
      <p className={styles.subtext}>Please try again later.</p>
    </div>
  );
}

ErrorPage.propTypes = {
  status: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  message: PropTypes.string.isRequired,
};

export default ErrorPage;

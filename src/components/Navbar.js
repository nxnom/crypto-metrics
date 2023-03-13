import React from 'react';

import styles from './Navbar.module.css';

function Navbar() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Crypto Metrics</h1>
    </header>
  );
}

export default Navbar;

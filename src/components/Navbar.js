import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Navbar.module.css';

function Navbar() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        <NavLink to="/">Crypto Metrics</NavLink>
      </h1>
    </header>
  );
}

export default Navbar;

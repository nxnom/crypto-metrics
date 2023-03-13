import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { NavLink, useLocation } from 'react-router-dom';
import { Icon as Iconify } from '@iconify/react';

import styles from './Navbar.module.css';

function Navbar() {
  const { pathname } = useLocation();

  return (
    <header className={styles.header}>
      {pathname === '/' ? (
        <Icon icon="tabler:coin-bitcoin" className={styles.logo} />
      ) : (
        <NavLink to="/" className={styles.back}>
          <Icon icon="material-symbols:arrow-back-ios-new" />
        </NavLink>
      )}
      <h1 className={styles.title}>
        <NavLink to="/">Crypto Metrics</NavLink>
      </h1>
      <div className={styles.icons}>
        <Icon icon="material-symbols:settings" />
      </div>
    </header>
  );
}

function Icon({ icon, className }) {
  return <Iconify className={cn(styles.icon, className)} icon={icon} />;
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Icon.defaultProps = {
  className: '',
};

export default Navbar;

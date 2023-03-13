import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { NavLink, useLocation } from 'react-router-dom';
import { Icon as Iconify } from '@iconify/react';
import { useDispatch, useSelector } from 'react-redux';

import { selectCurrency, setCurrency } from 'src/redux/filter/filterSlice';
import { currencies } from 'src/utils/currency';
import styles from './Navbar.module.css';
import Modal from './Modal';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const currency = useSelector(selectCurrency);
  const { pathname } = useLocation();

  const toggleModal = () => setIsOpen(!isOpen);

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
      <button type="button" onClick={toggleModal}>
        <Icon icon="material-symbols:settings" />
      </button>
      <Modal isOpen={isOpen} onClose={toggleModal}>
        <legend className={styles.legend}>Select Currency</legend>
        <div className={styles.radioGroup}>
          {Object.entries(currencies).map(([key, value]) => (
            <div key={key}>
              <input
                type="radio"
                id={key}
                name="currency"
                value={key}
                checked={currency === key}
                onChange={() => {
                  dispatch(setCurrency(key));
                  toggleModal();
                }}
              />
              <label htmlFor={key}>{value.name}</label>
            </div>
          ))}
        </div>
      </Modal>
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

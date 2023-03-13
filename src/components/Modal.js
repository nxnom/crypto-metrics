import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './Modal.module.css';

function Modal({
  children, onClose, isOpen, className,
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return createPortal(
    <div
      className={cn(styles.modal, isOpen && styles.open)}
      onClick={onClose}
      role="presentation"
    >
      <div
        className={cn(styles.content, className)}
        onClick={(e) => e.stopPropagation()}
        role="presentation"
      >
        {children}
      </div>
    </div>,
    document.body,
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  className: PropTypes.string,
};

Modal.defaultProps = {
  className: '',
};

export default Modal;

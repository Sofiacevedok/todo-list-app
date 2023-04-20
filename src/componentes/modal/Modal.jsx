import React, { useState } from 'react';
import { useEffect } from 'react';
import s from './modal.module.css';

const Modal = ({ handleClose, show, children }) => {
  useEffect(() => {
    if (show) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [show]);
  return show ? (
    <div className={s.modalContainer}>
      <div className={s.modalOverlay} onClick={handleClose} />
      <div className={`${s.modal}`}>{children}</div>
    </div>
  ) : null;
};

export default Modal;

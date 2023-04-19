import React, { useState } from 'react';
import s from './modal.module.css';

const Modal = ({ handleClose, show, children }) => {
  return (
    <div className={`${s.modal} ${show ? s.displayBlock : s.displayNone}`}>
      <section className={s.modalMain}>{children}</section>
    </div>
  );
};

export default Modal;

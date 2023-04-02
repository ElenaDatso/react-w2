import React from 'react';
import classes from './Modal.module.scss';

function Modal() {
  return (
    <div className={classes.modal}>
      <div className={classes.modalContent}>Succesfully added!</div>
    </div>
  );
}

export default Modal;

import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { overlay, modal } from './Modal.module.css';

export default function Modal({ modalBigImage, closeModal }) {

  const onKeyDown = event => {
      if (event.code === 'Escape') 
        closeModal();
  };
  
  useEffect(() => {

    window.addEventListener('keydown', onKeyDown);

    return () => window.removeEventListener('keydown', onKeyDown);
  });

    return (
      <div className={overlay} onClick={closeModal}>
        <div className={modal}>
          <img src={modalBigImage} alt=""/>
        </div>
      </div>
    );
}

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  modalBigImage: PropTypes.string.isRequired
};





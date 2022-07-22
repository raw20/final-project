import React from 'react';
import './css/PwContent.css';
import PassWordUpdate from './PasswordUpdate';

const PwModal = ({ modalClose }) => {

  return (
    <div className="pwModal-container" /* onClick={modalClose} */>
      <div className='pwModal'>
        <PassWordUpdate />
        <button className="modal-button" onClick={modalClose}>X</button>
      </div>
    </div>
  );
};

export default PwModal;
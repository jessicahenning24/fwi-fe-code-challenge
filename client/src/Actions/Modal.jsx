import React, { useEffect, useRef } from 'react';

import './Actions.scss';

const Modal = ({ children, setOpenModal }) => {
  // Close the modal if the user clicks off of it
  const CheckOutsideClick = (ref) => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpenModal(false);
      }
    }
    useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    });
  };

  const ref = useRef(null);
  CheckOutsideClick(ref);

  return (
    <div className="modal__overlay">
      <div ref={ref} className="modal__container">
        {children}
      </div>
    </div>
  );
};

export default Modal;

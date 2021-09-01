import React, { useRef, useEffect } from 'react';

import './RowOptions.scss';
import Modal from '../../Actions/Modal';

const RowOptions = ({ setEdit, setConfirmDelete, setShowOptions }) => {
  // Close the modal if the user clicks off of it
  const CheckOutsideClick = (ref) => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowOptions(false);
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
    <>
      <div ref={ref} className="popout">
        <div className="popout__option" onClick={() => setEdit(true)}>
          Edit
        </div>
        <div className="popout__option" onClick={() => setConfirmDelete(true)}>
          Delete
        </div>
      </div>
    </>
  );
};

export default RowOptions;

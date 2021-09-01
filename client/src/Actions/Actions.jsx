import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { fetchPlayersSuccess } from '../appState/actions';
import Select from 'react-select';

import './Actions.scss';
import Modal from './Modal';
import NewPlayerForm from './NewPlayerForm';

const Actions = ({ sort, setSort, setPage }) => {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();

  /* Very basic sort functionality just for player names
        Improvment - add to all columns so the user can sort by any column value */
  const sortByName = async (val) => {
    const response = await fetch(
      `http://localhost:3001/players?size=${10}&from=0&sortBy=name&sortOrder=${val}`,
      {
        headers: {
          Accept: 'application/json',
        },
      }
    );

    const json = await response.json();
    dispatch(fetchPlayersSuccess(json));
    setSort(val);
    setPage(0); // After the user sorts, set them back to the first page
  };

  return (
    <>
      <div id="actions-header" className="actions__container">
        <div className="actions__create-new" onClick={() => setOpenModal(true)}>
          <FontAwesomeIcon icon="plus" /> Create New Player
        </div>

        <div className="actions__sort">
          <div className="actions__sort-label">View</div>
          <Select
            id="sort-names"
            className="form__select"
            defaultValue={{ value: 'asc', label: 'A - Z' }}
            options={[
              { value: 'asc', label: 'A - Z' },
              { value: 'desc', label: 'Z - A' },
            ]}
            onChange={(e) => sortByName(e.value)}
          />
        </div>
      </div>

      {openModal && (
        <Modal setOpenModal={setOpenModal}>
          <NewPlayerForm setOpenModal={setOpenModal} sort={sort} />
        </Modal>
      )}
    </>
  );
};

export default Actions;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlayersSuccess } from '../appState/actions';
import { PAGE_SIZE } from '../constants';

import './Actions.scss';

const DeletePlayerForm = ({ player, setOpenModal, sort }) => {
  const { id, name } = player;
  const dispatch = useDispatch();

  const getCurrentPage = (state) => state.pagination.from;
  const currentPage = useSelector(getCurrentPage);

  const cancelDelete = (e) => {
    e.preventDefault();
    setOpenModal(false);
  };

  const confirmDeletePlayer = (id) => {
    (async function deletePlayer() {
      await fetch(`http://localhost:3001/players/${id}`, {
        method: 'DELETE',
      });

      const response = await fetch(
        `http://localhost:3001/players?size=${PAGE_SIZE}&from=${currentPage}&sortBy=name&sortOrder=${sort}`,
        {
          headers: {
            Accept: 'application/json',
          },
        }
      );

      const json = await response.json();
      dispatch(fetchPlayersSuccess(json));
    })();
  };

  return (
    <>
      <div className="modal__title">Delete Player</div>
      <div className="modal__message">
        Are you sure you want to delete{' '}
        <span className="modal__player-name">{name}</span>?
      </div>
      <div className="form__btn-wrapper">
        <button className="form__cancel-btn" onClick={(e) => cancelDelete(e)}>
          Cancel
        </button>
        <button
          className="form__submit-btn"
          onClick={() => confirmDeletePlayer(id)}
        >
          Yes
        </button>
      </div>
    </>
  );
};

export default DeletePlayerForm;

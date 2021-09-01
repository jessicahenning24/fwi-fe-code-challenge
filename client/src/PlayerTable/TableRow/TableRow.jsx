import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Flags from 'react-world-flags';

import Avatar from '../../Avatar';
import RowOptions from './RowOptions';
import Modal from '../../Actions/Modal';
import DeletePlayerForm from '../../Actions/DeletePlayerForm';
import EditPlayerForm from '../../Actions/EditPlayerForm';

const TableRow = ({ player, sort }) => {
  const { id, name, country, winnings, imageUrl } = player;

  const [showOptions, setShowOptions] = useState(false);
  const [edit, setEdit] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  return (
    <>
      <tr key={id} role="row" className="table__row">
        <td role="gridcell" className="table__avatar">
          <Avatar src={imageUrl} />
        </td>
        <td role="gridcell" className="table__player">
          {name}
        </td>
        <td role="gridcell" className="table__winnings">
          {winnings.toLocaleString(undefined, {
            style: 'currency',
            currency: 'USD',
          })}
        </td>
        <td role="gridcell" className="table__native">
          <div className="country">
            <Avatar>
              <Flags code={country} alt="" />
            </Avatar>
            {country}
          </div>
        </td>
        <td role="gridcell" className="table__options">
          <div className="table__options-wrapper">
            <div
              className="table__options-icon"
              onClick={() => setShowOptions(!showOptions)}
            >
              <FontAwesomeIcon icon="ellipsis-h" />
            </div>
            {showOptions && (
              <RowOptions
                edit={edit}
                setEdit={setEdit}
                confirmDelete={confirmDelete}
                setConfirmDelete={setConfirmDelete}
                setShowOptions={setShowOptions}
              />
            )}
          </div>
          {edit && (
            <Modal setOpenModal={setEdit}>
              <EditPlayerForm
                player={player}
                setOpenModal={setEdit}
                sort={sort}
              />
            </Modal>
          )}

          {confirmDelete && (
            <Modal setOpenModal={setConfirmDelete}>
              <DeletePlayerForm
                player={player}
                setOpenModal={setConfirmDelete}
                sort={sort}
              />
            </Modal>
          )}
        </td>
      </tr>

      {/* {edit && (
                <Modal setOpenModal={setEdit}>
                    <EditPlayerForm
                        player={player}
                        setOpenModal={setEdit}
                    />
                </Modal>
            )}

            {confirmDelete && (
                <Modal setOpenModal={setConfirmDelete}>
                    <DeletePlayerForm
                        player={player}
                        setOpenModal={setConfirmDelete}
                    />
                </Modal>
            )} */}
    </>
  );
};

export default TableRow;

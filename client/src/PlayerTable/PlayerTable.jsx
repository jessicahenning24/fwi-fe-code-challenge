import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchPlayersSuccess } from '../appState/actions';

import './PlayerTable.scss';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import Pagination from './Pagination';
import { PAGE_SIZE } from '../constants';

const getPlayers = (state) => state.playerIds.map((id) => state.players[id]);

const PlayerTable = ({ sort, page, setPage }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async function fetchPlayers() {
      const response = await fetch(
        `http://localhost:3001/players?size=${PAGE_SIZE}&from=${
          page * PAGE_SIZE
        }&sortBy=name&sortOrder=${sort}`,
        {
          headers: {
            Accept: 'application/json',
          },
        }
      );

      const json = await response.json();
      dispatch(fetchPlayersSuccess(json));
    })();
  }, [dispatch, page]);

  const players = useSelector(getPlayers);

  return (
    <div
      id="player-table-grid"
      role="grid"
      aria-label="Poker Players"
      className="player-table"
    >
      <TableHeader />
      <TableBody players={players} sort={sort} />
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};

export default PlayerTable;

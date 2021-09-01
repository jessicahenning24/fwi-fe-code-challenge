import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPlayersSuccess } from '../appState/actions';
import Select from 'react-select';

import { COUNTRIES } from '../constants';
import './Actions.scss';

const NewPlayerForm = ({ setOpenModal, sort }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState();
  const [winnings, setWinnings] = useState();
  const [country, setCountry] = useState('BD');
  const [avatar, setAvatar] = useState();

  const countryOptions = [];
  Object.keys(COUNTRIES).forEach((country) => {
    const option = { value: country, label: COUNTRIES[country] };
    countryOptions.push(option);
  });

  const cancelPlayer = (e) => {
    e.preventDefault();
    setOpenModal(false);
  };

  const addPlayerClick = () => {
    let data = {
      name,
      country,
      winnings: parseFloat(winnings),
      imageUrl: avatar,
    };
    (async function addPlayer() {
      await fetch('http://localhost:3001/players', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const response = await fetch(
        `http://localhost:3001/players?sortBy=name&sortOrder=${sort}`,
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
      <div className="modal__title">Create New Player</div>
      <form className="form" onSubmit={() => addPlayerClick()}>
        <div className="form__item">
          <div className="form__label">Name</div>
          <input
            className="form__input"
            type="string"
            required
            name="player_name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form__item">
          <div className="form__label">Winnings</div>
          <input
            className="form__input"
            type="number"
            required
            name="player_winnings"
            onChange={(e) => setWinnings(e.target.value)}
          />
        </div>
        <div className="form__item">
          <div className="form__label">Native Of</div>
          <Select
            id="player-country"
            className="form__select"
            required
            name="player_native"
            options={countryOptions}
            onChange={(e) => setCountry(e.value)}
          />
        </div>
        <div className="form__item">
          <div className="form__label">Avatar</div>
          <input
            className="form__input"
            type="string"
            name="player_avatar"
            onChange={(e) => setAvatar(e.target.value)}
          />
        </div>
        <div className="form__btn-wrapper">
          <button className="form__cancel-btn" onClick={(e) => cancelPlayer(e)}>
            Cancel
          </button>
          <button className="form__submit-btn" type="submit">
            Save
          </button>
        </div>
      </form>
    </>
  );
};

export default NewPlayerForm;

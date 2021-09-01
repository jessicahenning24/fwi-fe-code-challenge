import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Select from 'react-select';
import { fetchPlayersSuccess } from '../appState/actions';

import { COUNTRIES } from '../constants';
import './Actions.scss';

const EditPlayerForm = ({ player, setOpenModal, sort }) => {
  const { id } = player;

  const dispatch = useDispatch();

  const [name, setName] = useState(player.name);
  const [winnings, setWinnings] = useState(player.winnings);
  const [country, setCountry] = useState(player.country);
  const [avatar, setAvatar] = useState(player.imageUrl);

  const countryOptions = [];
  Object.keys(COUNTRIES).forEach((country) => {
    const option = { value: country, label: COUNTRIES[country] };
    countryOptions.push(option);
  });
  const selectedCountry = countryOptions.find((c) => c.value === country);

  const cancelEdit = (e) => {
    e.preventDefault();
    setOpenModal(false);
  };

  const updatePlayer = () => {
    let data = {
      name,
      country,
      winnings: parseFloat(winnings),
      imageUrl: avatar,
    };
    (async function editPlayer() {
      await fetch(`http://localhost:3001/players/${id}`, {
        method: 'PATCH',
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
      <div className="modal__title">Edit Player</div>

      <form className="form" onSubmit={() => updatePlayer()}>
        <div className="form__item">
          <div className="form__label">Name</div>
          <input
            className="form__input"
            type="string"
            required
            name="player_name"
            defaultValue={name}
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
            defaultValue={winnings}
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
            defaultValue={selectedCountry}
            onChange={(e) => setCountry(e.value)}
          />
        </div>
        <div className="form__item">
          <div className="form__label">Avatar</div>
          <input
            className="form__input"
            type="string"
            name="player_avatar"
            defaultValue={avatar}
            onChange={(e) => setAvatar(e.target.value)}
          />
        </div>

        <div className="form__btn-wrapper">
          <button className="form__cancel-btn" onClick={(e) => cancelEdit(e)}>
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

export default EditPlayerForm;

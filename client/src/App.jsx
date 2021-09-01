import React, { useState } from 'react';

import Header from './Header/Header';
import Actions from './Actions/Actions';
import PlayerTable from './PlayerTable/PlayerTable';

// Icon Library
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

const App = () => {
  /* Improvement - store the sort state and page state in Redux so we don't have to
      pass them down as props through child components */
  const [sort, setSort] = useState('asc');
  const [page, setPage] = useState(0);
  return (
    <>
      <Header />
      <Actions sort={sort} setSort={setSort} setPage={setPage} />
      <PlayerTable
        sort={sort}
        setSort={setSort}
        page={page}
        setPage={setPage}
      />
    </>
  );
};

export default App;

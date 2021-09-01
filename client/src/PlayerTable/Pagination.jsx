import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { PAGE_SIZE } from '../constants';

const Pagination = ({ page, setPage }) => {
  const getPageData = (state) => state.pagination;
  const pages = useSelector(getPageData);
  const [totalPages, setTotalPages] = useState(0);

  const findTotalPages = () => {
    const allPlayers = pages.total;
    const total = Math.ceil(allPlayers / PAGE_SIZE);
    setTotalPages(total);
  };

  const updatePageNum = (val) => {
    const newPage = page + val;
    if (newPage >= 0 && newPage <= totalPages - 1) {
      setPage(newPage);
    }
  };

  useEffect(() => {
    findTotalPages();
  }, [pages]);

  return (
    <div className="table__pagination">
      <div
        className="table__pagination-arrow"
        onClick={() => updatePageNum(-1)}
      >
        <FontAwesomeIcon icon="chevron-left" />
      </div>
      <div className="table__pagination-label">
        {page + 1} of {totalPages}
      </div>
      <div className="table__pagination-arrow" onClick={() => updatePageNum(1)}>
        <FontAwesomeIcon icon="chevron-right" />
      </div>
    </div>
  );
};

export default Pagination;

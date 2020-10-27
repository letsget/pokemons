import React from 'react';
import { Pagination as PokemonPagination } from 'semantic-ui-react';

const Pagination = ({ activePage, onPageChange }) => {
  return (
    <PokemonPagination
      activePage={activePage}
      totalPages={10}
      onPageChange={onPageChange}
    />
  );
};

export default Pagination;

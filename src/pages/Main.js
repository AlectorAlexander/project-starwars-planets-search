import React from 'react';
import Searchs from '../components/Searchs';
import SelectFilter from '../components/Selections';
import TableFunction from '../components/Table';
import Filters from '../hooks/Filters';

function Main() {
  return (
    <div className="d-flex justify-content-center flex-column">
      <Searchs />
      <Filters />
      <SelectFilter />
      <TableFunction />
    </div>
  );
}

export default Main;

import React from 'react';
import Orders from '../components/Orders';
import Searchs from '../components/Searchs';
import SelectFilter from '../components/Selections';
import TableFunction from '../components/Table';
import Filters from '../hooks/Filters';

function Main() {
  return (
    <div className="d-flex justify-content-center flex-column">
      <Searchs />
      <div className="d-flex justify-content-center">
        <SelectFilter />
        <Orders />
      </div>
      <Filters />
      <TableFunction />
    </div>
  );
}

export default Main;

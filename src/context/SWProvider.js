import PropTypes from 'prop-types';
import React, { useState } from 'react';
import fetchStarWars from '../api/API';
import SWContext from './SWContext';

function Provider({ children }) {
  const [data, setData] = useState('');
  const [table, setTable] = useState('');
  const [loading, setLoad] = useState(true);
  const [filterByName, setFilter] = useState({});
  const [search, setSearch] = useState('');

  async function setStarWarsState() {
    const API = await fetchStarWars();
    setData(API.results);
    setTable(API.results);
    setLoad(false);
  }
  const contextValue = {
    loading,
    data,
    search,
    table,
    filterByName,
    setFilter,
    setData,
    setTable,
    setStarWarsState,
    setSearch,
  };

  return (
    <SWContext.Provider value={ contextValue }>
      {children}
    </SWContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;

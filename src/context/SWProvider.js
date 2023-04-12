/* eslint-disable no-await-in-loop */
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
  const [column, setColumn] = useState(['population', 'orbital_period', 'diameter',
    'rotation_period', 'surface_water']);
  const [filterByNumeric, setFilterByNumeric] = useState({ filterByNumericValues: [] });

  async function setStarWarsState() {
    try {
      const API = await fetchStarWars();
      const filmsFetch = async (urlFilms) => Promise.all(urlFilms.map(async (url) => {
        const response = await fetch(url);
        const titleFetch = await response.json();
        return `"${titleFetch.title}" `;
      }));
      for (let i = 0; i < API.results.length; i += 1) {
        const FilmsTitle = [];
        const p = await filmsFetch(API.results[i].films);
        FilmsTitle.push(p);
        API.results[i].films = FilmsTitle;
      }
      setData(API.results);
      setTable(API.results);
      setLoad(false);
    } catch (err) {
      console.error(err);
    }
  }
  const contextValue = {
    loading,
    data,
    search,
    table,
    filterByName,
    filterByNumeric,
    column,
    setColumn,
    setFilterByNumeric,
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

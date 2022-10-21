/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import SWContext from '../context/SWContext';

function Searchs() {
  const { data, search, setTable, setFilter, setSearch } = useContext(SWContext);
  useEffect(() => {
    setFilter({ filterByName: { name: search } });
    if (search) {
      const value = search.toLowerCase();
      const searchFilter = data
        .filter((planet) => (planet.name.toLowerCase()).includes(value));

      setTable(searchFilter);
    } else { setTable(data); }
  }, [search]);

  return (
    <Form className="d-flex flex-column m-2 justify-content-center w-75">
      <img
        alt="star-wars-logo"
        className="w-25"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1280px-Star_Wars_Logo.svg.png"
      />
      <Form.Control
        type="text"
        value={ search }
        placeholder="Digite o nome do planeta"
        className="w-25 bg-dark text-white"
        onChange={ ({ target }) => setSearch(target.value) }
      />
    </Form>
  );
}

export default Searchs;
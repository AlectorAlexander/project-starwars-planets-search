/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import SWContext from '../context/SWContext';

function Input() {
  const { data, search, setTable, setFilter, setSearch } = useContext(SWContext);
  useEffect(() => {
    setFilter({ filterByName: { name: search } });
    if (search) {
      // Referência: Encontrei a solução para o código escrito nas 3 linhas abaixo, na pergunta feita no Slack, pelo Giovanni - Turma 14 - Tribo B;
      const value = search.toLowerCase();
      const searchFilter = data
        .filter((planet) => (planet.name.toLowerCase()).includes(value));

      setTable(searchFilter);
    } else { setTable(data); }
  }, [search]);

  return (
    <input
      data-testid="name-filter"
      value={ search }
      onChange={ ({ target }) => setSearch(target.value) }
    />
  );
}

export default Input;

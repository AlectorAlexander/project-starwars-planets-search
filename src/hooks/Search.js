/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import buttonFilter from '../components/FunctionButton';
import SWContext from '../context/SWContext';
import Column from './Column';

function Input() {
  const { data, search, setTable, table,
    setFilter, setSearch, filterByNumeric, setFilterByNumeric } = useContext(SWContext);
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
    <div>
      <input
        data-testid="name-filter"
        type="text"
        value={ search }
        placeholder="Digite o nome de um planeta"
        onChange={ ({ target }) => setSearch(target.value) }
      />
      <fieldset>
        <Column />
        <select data-testid="comparison-filter" id="comparison">
          <option value="maior que" defaultValue>maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          id="value-filter"
          defaultValue="0"
          data-testid="value-filter"
          type="number"
          placeholder="Digite um número"
        />
        <button
          data-testid="button-filter"
          type="button"
          onClick={ () => buttonFilter(filterByNumeric,
            setFilterByNumeric, table, setTable) }
        >
          Filtrar
        </button>
      </fieldset>
    </div>
  );
}

export default Input;

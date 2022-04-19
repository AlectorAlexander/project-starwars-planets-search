/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import SWContext from '../context/SWContext';

function Input() {
  const { data, search, setTable,
    setFilter, setSearch, setFilterByNumeric } = useContext(SWContext);
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

  const buttonFilter = () => {
    const column = document.getElementById('column').value;
    const comparison = document.getElementById('comparison').value;
    const valueFilter = document.getElementById('value-filter').value;
    setFilterByNumeric({
      filterByNumericValues: [
        {
          column,
          comparison,
          value: valueFilter,
        },
      ],
    });
    switch (comparison) {
    case 'maior que':
      setTable(data
        .filter((element) => Number(element[column]) > Number(valueFilter)));
      break;
    case 'menor que':
      setTable(data
        .filter((element) => Number(element[column]) < Number(valueFilter)));
      break;
    case 'igual a':
      setTable(data
        .filter((element) => Number(element[column]) === Number(valueFilter)));
      break;

    default:
      setTable(data);
      break;
    }
  };

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
        <select data-testid="column-filter" id="column">
          <option value="population" selected>population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
        <select data-testid="comparison-filter" id="comparison">
          <option value="maior que" selected>maior que</option>
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
          onClick={ buttonFilter }
        >
          Filtrar
        </button>
      </fieldset>
    </div>
  );
}

export default Input;

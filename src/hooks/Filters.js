import React, { useContext } from 'react';
import SWContext from '../context/SWContext';

function Filters() {
  const { filterByNumeric, setFilterByNumeric,
    column: coluna, setColumn, setTable, table, data } = useContext(SWContext);

  const deleteFromTheFilter = (itemList) => {
    console.log(table);
    const { filterByNumericValues } = filterByNumeric;
    const newFilter = filterByNumericValues
      .filter((element) => element.column !== itemList);
    setFilterByNumeric({ filterByNumericValues: newFilter });
    setColumn([...coluna, itemList]);
    setTable(data);
    console.log(data);
    console.log(table);
    filterByNumericValues.map((elem) => {
      const { column, comparison, value } = elem;
      switch (comparison) {
      case 'maior que':
        setTable(table
          .filter((element) => Number(element[column]) > Number(value)));
        break;
      case 'menor que':
        setTable(table
          .filter((element) => Number(element[column]) < Number(value)));
        break;
      case 'igual a':
        setTable(table
          .filter((element) => Number(element[column]) === Number(value)));
        break;

      default:
        break;
      }
    });
  };

  const { filterByNumericValues } = filterByNumeric;
  return (
    <ul>
      { filterByNumericValues
      && filterByNumericValues.map((element, i) => {
        const { column, comparison, value } = element;
        return (
          <li
            key={ i }
          >
            {` ${column} ${comparison} ${value} `}
            <button
              onClick={ () => deleteFromTheFilter(column) }
              type="button"
            >
              vx
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default Filters;

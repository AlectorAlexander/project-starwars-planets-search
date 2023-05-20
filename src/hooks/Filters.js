/* eslint-disable max-len */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-case-declarations */
/* eslint-disable array-callback-return */
import React, { useContext, useEffect } from 'react';
import SWContext from '../context/SWContext';
import '../styles/Filters.css';

function Filters() {
  const { filterByNumeric, setFilterByNumeric,
    column: coluna, setColumn, setTable, table, data } = useContext(SWContext);

  useEffect(() => {
    const { filterByNumericValues } = filterByNumeric;
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
  }, [filterByNumeric]);

  const deleteFromTheFilter = (itemList) => {
    const { filterByNumericValues } = filterByNumeric;
    const newFilter = filterByNumericValues
      .filter((element) => element.column !== itemList);
    setFilterByNumeric({ filterByNumericValues: newFilter });
    setColumn([...coluna, itemList]);
    setTable(data);
  };

  const { filterByNumericValues } = filterByNumeric;
  return (
    <ul className="d-flex justify-content-center flex-column flex text-white h-100 filters">
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

import React, { useContext } from 'react';
import SWContext from '../context/SWContext';

function Filters() {
  const { filterByNumeric } = useContext(SWContext);

  return (
    <ul>
      { filterByNumeric && filterByNumeric.filterByNumericValues.map((element, i) => {
        const { column, comparison, value } = element;
        return (<li key={ i }>{` ${column} ${comparison} ${value} `}</li>);
      })}
    </ul>
  );
}

export default Filters;

import React, { useContext, useEffect } from 'react';
import SWContext from '../context/SWContext';

function Column() {
  const { column, filterByNumeric, setColumn } = useContext(SWContext);
  useEffect(() => {
    if (filterByNumeric) {
      const { filterByNumericValues } = filterByNumeric;
      const { length } = filterByNumericValues;
      const theColumnIwant = filterByNumericValues[length - 1].column;
      const newColumn = column.filter((element) => element !== theColumnIwant);
      setColumn(newColumn);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterByNumeric]);
  return (
    <select data-testid="column-filter" id="column">
      {column.map((element, i) => (
        <option
          key={ i }
          value={ element }
        >
          {element}
        </option>
      ))}
    </select>
  );
}

export default Column;

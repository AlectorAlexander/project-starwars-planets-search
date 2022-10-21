export default function buttonFilter(filterByNumeric, setFilterByNumeric,
  table, setTable) {
  const column = document.getElementById('column').value;
  const comparison = document.getElementById('comparison').value;
  const valueFilter = document.getElementById('value-filter').value;
  if (filterByNumeric) {
    setFilterByNumeric({ filterByNumericValues: [
      ...filterByNumeric.filterByNumericValues,
      {
        column,
        comparison,
        value: valueFilter,
      },
    ],
    });
  } else {
    setFilterByNumeric({ filterByNumericValues: [
      {
        column,
        comparison,
        value: valueFilter,
      },
    ],
    });
  }
  switch (comparison) {
  case 'maior que':
    setTable(table
      .filter((element) => Number(element[column]) > Number(valueFilter)));
    break;
  case 'menor que':
    setTable(table
      .filter((element) => Number(element[column]) < Number(valueFilter)));
    break;
  case 'igual a':
    setTable(table
      .filter((element) => Number(element[column]) === Number(valueFilter)));
    break;

  default:
    break;
  }
}

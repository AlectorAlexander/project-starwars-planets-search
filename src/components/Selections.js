import React, { useContext, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import buttonFilter from '../hooks/FunctionButton';
import SWContext from '../context/SWContext';
import '../styles/Selections.css';

function SelectFilter() {
  const { column, filterByNumeric, setColumn, setTable,
    table, setFilterByNumeric, data } = useContext(SWContext);
  const { filterByNumericValues } = filterByNumeric;

  useEffect(() => {
    if (filterByNumericValues.length) {
      const { length } = filterByNumericValues;
      const theColumnIwant = filterByNumericValues[length - 1].column;
      const newColumn = column.filter((element) => element !== theColumnIwant);
      setColumn(newColumn);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterByNumeric]);

  const filterRestaure = () => {
    setFilterByNumeric({ filterByNumericValues: [] });
    setColumn(['population', 'orbital_period', 'diameter',
      'rotation_period', 'surface_water']);
    setTable(data);
  };
  return (
    <Form
      className="d-flex border rounded-pill
    border-warning justify-content-center
    align-items-end m-3 selections p-4"
    >
      <div>
        <p className="text-white">Coluna</p>
        <Form.Select className="bg-dark text-white" id="column">
          {column.map((element, i) => (
            <option
              key={ i }
              value={ element }
            >
              {element}
            </option>
          ))}
        </Form.Select>
      </div>
      <div className="">
        <p className="text-white">Operador</p>
        <Form.Select
          id="comparison"
          className="bg-dark text-white"
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </Form.Select>
      </div>
      <Form.Control
        id="value-filter"
        className="bg-dark text-white"
        style={ { heigth: '25%', width: '70px', marginLeft: '5px', marginRight: '5px' } }
        type="number"
        placeholder="0"
      />
      <Button
        data-testid="button-filter"
        type="button"
        variant="warning"
        onClick={ () => buttonFilter(filterByNumeric,
          setFilterByNumeric, table, setTable) }
      >
        Filtrar
      </Button>
      { filterByNumericValues.length > 0 && (
        <Button
          data-testid="button-filter"
          className="mx-1 button-filter"
          variant="warning"
          onClick={ filterRestaure }
        >
          Limpar filtros
        </Button>)}
    </Form>
  );
}

export default SelectFilter;

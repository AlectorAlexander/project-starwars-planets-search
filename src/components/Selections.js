import React, { useContext, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import buttonFilter from '../hooks/FunctionButton';
import SWContext from '../context/SWContext';

function SelectFilter() {
  const { column, filterByNumeric, setColumn, setTable,
    table, setFilterByNumeric } = useContext(SWContext);
  useEffect(() => {
    const { filterByNumericValues } = filterByNumeric;
    if (filterByNumericValues.length) {
      const { length } = filterByNumericValues;
      const theColumnIwant = filterByNumericValues[length - 1].column;
      const newColumn = column.filter((element) => element !== theColumnIwant);
      setColumn(newColumn);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterByNumeric]);
  return (
    <Form className="d-flex justify-content-center align-items-end m-3">
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
        defaultValue="0"
        className="bg-dark text-white"
        style={ { heigth: '25%', width: '50px', marginLeft: '5px', marginRight: '5px' } }
        type="number"
        placeholder="Digite um número"
      />
      <Button
        data-testid="button-filter"
        type="button"
        variant="dark"
        onClick={ () => buttonFilter(filterByNumeric,
          setFilterByNumeric, table, setTable) }
      >
        Filtrar
      </Button>
    </Form>
  );
}

export default SelectFilter;

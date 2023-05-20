/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import SWContext from '../context/SWContext';
import '../styles/Orders.css';

function Orders() {
  const { column, table, setTable } = useContext(SWContext);
  const [order, setOrder] = useState('');
  const [Column, setColumn] = useState('');
  const [ColumnOrder, setColumnOrder] = useState('population');

  useEffect(() => {
    const newColumn = JSON.parse(JSON.stringify(column));
    return setColumn(newColumn);
  }, []);

  const orderInTheHouse = () => {
    const newTable = JSON.parse(JSON.stringify(table));
    function orderInTheHouseAsc(a, b) {
      return a[ColumnOrder] - b[ColumnOrder];
    }

    function orderInTheHouseDesc(a, b) {
      return b[ColumnOrder] - a[ColumnOrder];
    }
    if (table) {
      if (order === 'Ascendente') {
        return setTable(newTable.sort(orderInTheHouseAsc));
      }
      if (order === 'Descendente') {
        return setTable(newTable.sort(orderInTheHouseDesc));
      }
    }
  };

  useEffect(() => {
    orderInTheHouse();
  }, [column]);

  return (
    <Form
      className="d-flex border rounded-pill
    border-warning justify-content-center
    align-items-end m-3 p-3 orders"
    >
      <div className="">
        <p className="text-white">Ordenar</p>
        <Form.Select
          className="bg-dark text-white"
          id="column"
          onClick={ ({ target }) => setColumnOrder(target.value) }
        >
          {Column.length > 0 && Column.map((element, i) => (
            <option
              key={ i }
              value={ element }
            >
              {element}
            </option>
          ))}
        </Form.Select>
      </div>
      <div className="pill">
        <p className="text-white">Operador</p>
        <Form.Group onClick={ ({ target }) => setOrder(target.value) }>
          <Form.Check
            id="comparison"
            label="Ascendente"
            value="Ascendente"
            type="radio"
            name="group1"
            className="m-2 h-25 text-white"
          />
          <Form.Check
            id="comparison"
            label="Descendente"
            value="Descendente"
            type="radio"
            name="group1"
            className="m-2 h-25 text-white"
          />
        </Form.Group>
      </div>
      <Button
        type="button"
        variant="warning"
        onClick={ orderInTheHouse }
      >
        Ordenar
      </Button>
    </Form>
  );
}

export default Orders;

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, InputGroup } from 'react-bootstrap';

function Withdrawal() {
  const [value, setValue] = useState(0);
  const balance = useSelector((state) => state.balance);
  const dispatch = useDispatch();

  const decrement = (evt) => {
    evt.preventDefault();
    const newValue = balance - value;
    dispatch({ type: 'SET_BALANCE', balance: newValue });
    setValue(0);
  };

  return (
    <section className="row">
      <Form className="mb-3 d-grid gap-2" onSubmit={decrement}>
        <Form.Label>Uttag:</Form.Label>
        <InputGroup className="mb-3">
          <Form.Control
            type="number"
            value={value}
            onChange={({ target }) => setValue(target.valueAsNumber)}
          />
          <Button variant="primary">Spara</Button>
        </InputGroup>
      </Form>
    </section>
  );
}

export default Withdrawal;

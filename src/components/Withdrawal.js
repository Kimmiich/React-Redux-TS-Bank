import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

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
      <form className="mb-3 d-grid gap-2" onSubmit={decrement}>
        <label>Uttag:</label>

        <input
          type="number"
          value={value}
          onChange={({ target }) => setValue(target.valueAsNumber)}
        />
        <button>Spara</button>
      </form>
    </section>
  );
}

export default Withdrawal;

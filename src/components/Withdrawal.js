import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

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
    <div>
      <form onSubmit={decrement}>
        Uttag:
        <input
          type="number"
          value={value}
          onChange={({ target }) => setValue(target.valueAsNumber)}
        />
        <button>Spara</button>
      </form>
    </div>
  );
}

export default Withdrawal;

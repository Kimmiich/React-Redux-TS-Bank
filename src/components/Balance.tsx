import React from 'react';
import { useSelector } from 'react-redux';

function Balance() {
  const balance = useSelector((state) => state.balance);

  return (
    <div>
      <h2>Ditt saldo: {balance}kr</h2>
    </div>
  );
}

export default Balance;

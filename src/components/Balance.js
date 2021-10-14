import React from 'react';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

function Balance() {
  const balance = useSelector((state) => state.balance);

  return (
    <section className="row">
      <h2 className="text-center bg-light border p-3 rounded">
        Ditt saldo: {balance}kr
      </h2>
    </section>
  );
}

export default Balance;

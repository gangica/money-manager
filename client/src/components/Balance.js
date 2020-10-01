import React, { useContext } from 'react';
import { GlobalContext } from '../context/StateProvider';

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((first, next) => (first += next), 0).toFixed(1);
  
  return (
    <div>
      <h4>Balance</h4>
      <h1 id="balance">{total}</h1>
    </div>
  );
}

export default Balance;

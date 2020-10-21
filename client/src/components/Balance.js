import React, { useContext } from 'react';
import { GlobalContext } from '../context/StateProvider';

const Balance = () => {
  const { dataToShow } = useContext(GlobalContext);
  const amounts = dataToShow.map(transaction => transaction.amount);
  const total = amounts.reduce((first, next) => (first += next), 0).toFixed(1);
  
  return (
    <div>
      <h5>Balance</h5>
      <p className="money">{total}</p>
    </div>
  );
}

export default Balance;

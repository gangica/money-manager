import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../context/StateProvider';
import Transaction from './Transaction';

const TransactionList = () => {
  const { dataToShow } = useContext(GlobalContext);

  return (
    <div>
      <h3>History</h3>
      <ul id="list" className="list">
        {dataToShow && dataToShow.map(transaction => (<Transaction key={transaction._id} transaction={transaction} />))}
      </ul>
    </div>
  );
}

export default TransactionList;

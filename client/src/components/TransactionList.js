import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/StateProvider';
import Transaction from './Transaction';

const TransactionList = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);
  
  useEffect(() => {
    getTransactions();
  }, [])

  return (
    <div>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map(transaction => (<Transaction key={transaction._id} transaction={transaction} />))}
      </ul>
      <h3>Detail</h3>
      <div className="sidebarUser">
        <div className="sidebarUser_name" style={{flex: 0.35}}>
          <h4>Name</h4>
          <p>Type</p>
          <p>Category</p>
          <p>Date</p>
          <p>Amount</p>
        </div>
        <div className="sidebarUser_name">
          <h4>Plan B</h4>
          <p>Expense</p>
          <p>Shopping</p>
          <p>13-10-2020</p>
          <p>AUD 10</p>
        </div>
      </div>
    </div>
  );
}

export default TransactionList;

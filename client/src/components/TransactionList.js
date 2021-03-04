import React from 'react'
import Transaction from './Transaction'
import '../css/TransactionList.css'

const TransactionList = ({ data }) => {
  const compare = (a, b) => {
    const dateA = a.date;
    const dateB = b.date;

    if (dateA > dateB) {
      return -1
    } else if (dateA < dateB) {
      return 1
    }

    return 0
  }

  return (
    <div className="list__container">
      <h4>Recent Transactions</h4>
      <ul id="list" className="list">
        {data && data.sort(compare).map(transaction => (<Transaction key={transaction._id} transaction={transaction} />))}
      </ul>
      <button className="btn">See all transactions</button>
    </div>
  );
}

export default TransactionList;

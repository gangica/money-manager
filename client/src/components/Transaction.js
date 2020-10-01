import React, { useContext } from 'react';
import { GlobalContext } from '../context/StateProvider';

const Transaction = ({ transaction }) => {
  const { name, amount, type } = transaction; 
  const { deleteTransaction } = useContext(GlobalContext); 

  return (
      <li className={type === 'expense' ? 'minus' : 'plus'}>
          {name}
          <span>{amount}</span><button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>x</button>
      </li>
  );
}

export default Transaction;

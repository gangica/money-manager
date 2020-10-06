import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/StateProvider';

const Transaction = ({ transaction }) => {
  const { name, date, amount, type, category } = transaction; 
  const { deleteTransaction } = useContext(GlobalContext); 

  return (
    <li className={type === 'expense' ? 'minus' : 'plus'}>
      <Link to={{
        pathname: "/transaction",
        trans: { name, amount, date, type, category }
      }}>{name}</Link>

      <span>{amount}</span><button className="delete-btn" onClick={() => deleteTransaction(transaction._id)}>x</button>
    </li>
  );
}

export default Transaction;

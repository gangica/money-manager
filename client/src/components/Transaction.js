import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/StateProvider';

const Transaction = ({ transaction }) => {
  const { name, date, amount, type, category, _id } = transaction; 
  const { deleteTransaction } = useContext(GlobalContext); 

  return (
    <li className={type === 'expense' ? 'minus' : 'plus'}>
      <Link to={{
        pathname: "/transaction",
        trans: { name, amount, date, type, category, _id }
      }}>{name}</Link>

      <span>{amount}</span><button className="delete-btn" onClick={() => deleteTransaction(_id)}>x</button>
    </li>
  );
}

export default Transaction;

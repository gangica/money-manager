import React, { useContext } from 'react';
import { GlobalContext } from '../context/StateProvider';
import { Avatar } from '@material-ui/core';

const Transaction = ({ transaction }) => {
  const { name, amount, type, date } = transaction; 
  const { deleteTransaction } = useContext(GlobalContext);

  return (
      <li className="sidebarUser">
        <Avatar />
          <div className="sidebarUser_name">
            <h2>{name}</h2>
            <p>{date.slice(0, 10)}</p>
            <p>description</p>
          </div>
          <span className={amount > 0 ? "money plus" : "money minus"}>{amount}</span><button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>x</button>
      </li>
  );
}

export default Transaction;

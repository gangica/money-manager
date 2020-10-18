import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/StateProvider';
import { Avatar } from '@material-ui/core';

const Transaction = ({ transaction }) => {
  const { name, date, amount, type, category, _id } = transaction; 
  const { deleteTransaction } = useContext(GlobalContext); 

  return (
    <Link to={{
      pathname: "/transaction",
      trans: { name, amount, date, type, category, _id }
    }}>
      <li className="sidebarUser">
        <div className="sidebarUser_name">
          <h2>{name}</h2>
          <p>description</p>
        </div>
        <span className={amount > 0 ? "money plus" : "money minus"}>{amount}</span><button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>x</button>

      </li>
    </Link>
  );
}

export default Transaction;

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/StateProvider';
import { Avatar } from '@material-ui/core';
import { formatDate } from "../context/utils";

const Transaction = ({ transaction }) => {
  const { name, date, amount, _id } = transaction; 
  const { deleteTransaction } = useContext(GlobalContext); 

  return (
    <li className="sidebarUser">
      <Link to={{
        pathname: "/transaction",
        state: { transactionId: _id }
      }}>
        <div className="sidebarUser_name">
          <h2>{name}</h2>
          <p>{formatDate(date)}</p>
          <p>description</p>
        </div>
      </Link>
      <span className={amount > 0 ? "money plus" : "money minus"}>{amount}</span><button className="delete-btn" onClick={() => deleteTransaction(_id)}>x</button>
    </li>
  );
}

export default Transaction;

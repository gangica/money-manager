import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/StateProvider';
import { Avatar } from '@material-ui/core';

const Transaction = ({ transaction }) => {
  const { name, date, amount, type, category, _id } = transaction; 
  const { deleteTransaction } = useContext(GlobalContext); 

  const formatDate = (date) => {
    let f = new Date(date);
    return f.toLocaleDateString();
  }

  return (

    <li className="sidebarUser">
      <Link to={{
        pathname: "/transaction",
        trans: { name, amount, date, type, category, _id }
      }}>
        <div className="sidebarUser_name">
          <h2>{name}</h2>
          <p>{formatDate(date)}</p>
          <p>description</p>
        </div>
      </Link>
      <span className={amount > 0 ? "money plus" : "money minus"}>{amount}</span><button className="delete-btn" onClick={() => deleteTransaction(_id)}>x</button>
    </li >
  );
}

export default Transaction;

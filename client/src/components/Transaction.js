import React from 'react'
import { Link } from 'react-router-dom'
import { formatDate, formatMoney, lookUpIcon } from "../context/utils"
import '../css/Transaction.css'

const Transaction = ({ transaction }) => {
  const { type, name, category, date, amount, _id } = transaction;

  return (
    <li className="transaction__item">
      <Link to={{
        pathname: "/update",
        state: { transactionId: _id }
      }}>
        {lookUpIcon(type, category)}
        <div className="transaction__info">
          <h4>{name}</h4>
          <p>{category}</p>
        </div>
        <div className="transaction__info right">
          <h4>{formatMoney(amount)}<span>đ</span></h4>
          <p>{formatDate(date)}</p>
        </div>
      </Link>
    </li>
  );
}

export default Transaction;

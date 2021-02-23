import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../context/StateProvider';
import TextField from "@material-ui/core/TextField";
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { IconButton } from '@material-ui/core';
import axios from 'axios';
import { formatAmount } from '../context/utils';

const Update = ({ location }) => {
  const { editTransaction } = useContext(GlobalContext);
  const { transactionId } = location.state;
  const [transaction, setTransaction] = useState(null);

  const types = [
    {
      value: 'income',
      label: 'Income'
    },
    {
      value: 'expense',
      label: 'Expense'
    }
  ]

  const submit = (e) => {
    e.preventDefault();

    editTransaction(transactionId, transaction);

    setTransaction(null)
  }

  useEffect(() => {
    axios.get(`/api/v1/transactions/${transactionId}`)
      .then(res => setTransaction(res.data.data))
  }, [])

  return (
    <div className="container">
      <div className="sidebar">
        <div className="sidebar_header">
          <div className="username">
            <h3>Update Transaction</h3>
          </div>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      {transaction && <form onSubmit={e => submit(e)}>
        <div className="form-control">
          <TextField select label="Type" value={transaction.type}
            onChange={e => setTransaction({...transaction, type: e.target.value})}>
            {types.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div className="form-control">
          <TextField label="Category" value={transaction.category}
            onChange={e => setTransaction({...transaction, category: e.target.value})} />
        </div>
        <div className="form-control">
          <TextField label="Name" value={transaction.name}
            onChange={e => setTransaction({...transaction, name: e.target.value})} />
        </div>
        <div className="form-control">
          <TextField type="date" label="Date" defaultValue={transaction.date}
            onChange={e => setTransaction({...transaction, date: e.target.value})} />
        </div>
        <div className="form-control">
          <TextField label="Amount" value={transaction.amount}
            onChange={e => setTransaction({...transaction, amount: e.target.value})} />
        </div>
        <button className="btn">Edit</button>
      </form>}
    </div>
  );
}

export default Update;

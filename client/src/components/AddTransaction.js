import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../context/StateProvider';
import TextField from "@material-ui/core/TextField";
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

import { Link, useHistory } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { IconButton } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const AddTransaction = ({ location }) => {
  const { addTransaction, editTransaction } = useContext(GlobalContext);
  const { transaction } = location;
  const [name, setName] = useState(transaction.name);
  const [date, setDate] = useState(transaction.date.substr(0,10));
  const [type, setType] = useState(transaction.type);
  const [category, setCategory] = useState(transaction.category);
  const [amount, setAmount] = useState(transaction.amount);
  
  const history = useHistory();

  const routeChange = () =>{ 
    history.push("/");
  }

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

  const reset = () => {
    setName('');
    setDate('');
    setType('');
    setCategory('');
    setAmount(0);
  }

  const sendTransaction = (e) => {
    e.preventDefault();

    if (transaction.status === "add") {
      addTransaction({ name, type, date, category,
        amount: ((type === "income" || Number(amount) < 0) ? Number(amount) : Number(0 - amount))
      })
    } else {
      
      editTransaction(transaction._id, { name, type, date, category,
        amount: ((type === "income" || Number(amount) < 0) ? Number(amount) : Number(0 - amount))
      })
    }
    routeChange();
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
      },
    },
  }));  

  return (
    <div className="container">
      <div className="sidebar">
        <div className="sidebar_header">
          <Link to="/"><IconButton><ArrowBackIcon /></IconButton></Link>
          <div className="username">
            <h3>Add Transaction</h3>
          </div>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      
      <form className={useStyles().root} onSubmit={e => sendTransaction(e)}>
        <div>
          <InputLabel>Type</InputLabel>
          <TextField select value={type} onChange={e => setType(e.target.value)}>
            {types.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div>
          <InputLabel>Category</InputLabel>
          <Input required label="Category" value={category} onChange={e => setCategory(e.target.value)} />
        </div>
        <div>
          <InputLabel>Name</InputLabel>
          <Input required label="Name" value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div>
          <InputLabel>Date</InputLabel>
          <Input required type="date" label="Date" defaultValue={date} onChange={e => setDate(e.target.value)} />
        </div>
        <div>
          <InputLabel>Amount</InputLabel>
          <Input required label="Amount" value={amount} onChange={e => setAmount(e.target.value)} />
        </div>
        <button className="btn">{transaction.status === "add" ? "Add" : "Edit"}</button>  
      </form>
    </div>
  );
}

export default AddTransaction;

import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/StateProvider';
import TextField from "@material-ui/core/TextField";
import MenuItem from '@material-ui/core/MenuItem';

const AddTransaction = ({ location }) => {
  const { addTransaction, editTransaction } = useContext(GlobalContext);
  const { transaction } = location;
  const [name, setName] = useState(transaction.name);
  const [date, setDate] = useState(transaction.date.substr(0,10));
  const [type, setType] = useState(transaction.type);
  const [category, setCategory] = useState(transaction.category);
  const [amount, setAmount] = useState(transaction.amount);
  
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

    reset();
  }

  return (
    <div>
      <h3>Add Transaction</h3>
      <form onSubmit={e => sendTransaction(e)}>
        <div className="form-control">
          <TextField select label="Type" value={type} onChange={e => setType(e.target.value)}>
            {types.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div className="form-control">
          <TextField label="Category" value={category} onChange={e => setCategory(e.target.value)} />
        </div>
        <div className="form-control">
          <TextField label="Name" value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div className="form-control">
          <TextField type="date" label="Date" defaultValue={date} onChange={e => setDate(e.target.value)} />
        </div>
        <div className="form-control">
          <TextField label="Amount" value={amount} onChange={e => setAmount(e.target.value)} />
        </div>
        <button className="btn">{transaction.status === "add" ? "Add" : "Edit"}</button>
      </form>
    </div>
  );
}

export default AddTransaction;

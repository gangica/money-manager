import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../context/StateProvider';
import TextField from "@material-ui/core/TextField";
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { IconButton } from '@material-ui/core';
import { formatAmount } from '../context/utils';

const Add = () => {
    const { addTransaction } = useContext(GlobalContext);
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

    const sendTransaction = (e) => {
        e.preventDefault();

        setTransaction({
            ...transaction, 
            amount: formatAmount(transaction.type, transaction.amount)
        });

        addTransaction(transaction);

        // setTransaction(null);
    }

    return (
        <div className="container">
            <div className="sidebar">
                <div className="sidebar_header">
                    <div className="username">
                        <h3>Add Transaction</h3>
                    </div>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <form onSubmit={e => sendTransaction(e)}>
                <div className="form-control">
                    <TextField select label="Type"
                    onChange={e => setTransaction({...transaction, type: e.target.value})}>
                        {types.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>
                <div className="form-control">
                    <TextField label="Category"
                    onChange={e => setTransaction({...transaction, category: e.target.value})} />
                </div>
                <div className="form-control">
                    <TextField label="Name"
                    onChange={e => setTransaction({...transaction, name: e.target.value})} />
                </div>
                <div className="form-control">
                    <TextField type="date" label="Date"
                    onChange={e => setTransaction({...transaction, date: e.target.value})} />
                </div>
                <div className="form-control">
                    <TextField label="Amount"
                    onChange={e => setTransaction({...transaction, amount: e.target.value})} />
                </div>
                <button className="btn">Add</button>
            </form>
        </div>
    );
}

export default Add;

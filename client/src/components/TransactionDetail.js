import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { IconButton } from '@material-ui/core';
import { formatDate } from "../context/utils";
import axios from 'axios';

const TransactionDetail = ({ location }) => {
    const { transactionId } = location.state;
    const [transaction, setTransaction] = useState(null);

    useEffect(() => {
        axios.get(`/api/v1/transactions/${transactionId}`)
        .then(res => setTransaction(res.data.data))
    }, [])

    return (
        <div className="container">
            <div className="sidebar">
                <div className="sidebar_header">
                    <div className="username">
                        <h3>Detail</h3>
                    </div>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="sidebarUser">
                <div className="sidebarUser_name" style={{ flex: 0.35 }}>
                    <h4>Name</h4>
                    <p>Type</p>
                    <p>Category</p>
                    <p>Date</p>
                    <p>Amount</p>
                </div>
                {transaction && <div className="sidebarUser_name">
                    <h4>{transaction.name}</h4>
                    <p>{transaction.type}</p>
                    <p>{transaction.category}</p>
                    <p>{formatDate(transaction.date)}</p>
                    <p>{transaction.amount}</p>
                </div>}

            </div>
            <Link to={{ pathname: "/update", state: { transactionId: transactionId } }}>
                <button className="btn">Update</button>
            </Link>
        </div>
    );
}

export default TransactionDetail;

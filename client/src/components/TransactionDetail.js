import React, { useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { IconButton } from '@material-ui/core';
import { GlobalContext } from '../context/StateProvider';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const TransactionDetail = ({ location }) => {
    const { name, amount, type, category, date, _id } = location.trans;
    const { deleteTransaction } = useContext(GlobalContext);

    const history = useHistory();

    const routeChange = () =>{ 
      history.push("/");
    }

    const formatDate = (date) => {
        let f = new Date(date);
        return f.toLocaleDateString();
    }

    return (
        <div className="container">
            <div className="sidebar">
                <div className="sidebar_header">
                    <Link to="/"><IconButton><ArrowBackIcon /></IconButton></Link>
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
                <div className="sidebarUser_name">
                    <h4>{name}</h4>
                    <p>{type}</p>
                    <p>{category}</p>
                    <p>{formatDate(date)}</p>
                    <p>{amount}</p>
                </div>

            </div>
            <Link to={{ pathname: "/add", transaction: { ...location.trans, status: "edit" } }}>
                <button className="btn">Edit</button>
            </Link>
            <Link to="/">
                <button className="btn" onClick={() => {deleteTransaction(_id); routeChange()}}>Delete</button>
            </Link>
        </div>
    );
}

export default TransactionDetail;

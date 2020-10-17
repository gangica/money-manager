import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TransactionDetail = ({ location }) => {
    const { name, amount, type, category, date } = location.trans;
    return (
        <div>
            <h1>{category}</h1>
            <h3>{type}</h3>
            <h3>{name}</h3>
            <h3>{date.substr(0,10)}</h3>
            <h3>{amount}</h3>
            <Link to={{ pathname: "/add", transaction: {...location.trans, status: "edit" }}}>
                <button className="btn">Edit</button>
            </Link>
        </div>
    );
}

export default TransactionDetail;

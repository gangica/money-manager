import React from 'react';

import Header from './Header';
import Balance from './Balance';
import '../App.css';
import IncomeExpenses from './IncomeExpenses';
import TransactionList from './TransactionList';
import { Link } from 'react-router-dom';

const Main = () => {
    const initTrans = {
        status: "add",
        name: "",
        type: "income",
        date: "",
        category: "",
        amount: 0
    }

    return (
        <div className="container">
            <Header />
            <IncomeExpenses />
            <TransactionList />
            <Link to={{ pathname: "/add", transaction: initTrans}}>
                <button className="btn">Add</button>
            </Link>
        </div>
    );
}

export default Main;

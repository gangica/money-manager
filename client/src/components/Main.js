import React, { useEffect, useState, useContext } from 'react';

import Header from './Header';
import '../App.css';
import IncomeExpenses from './IncomeExpenses';
import TransactionList from './TransactionList';
import { GlobalContext } from '../context/StateProvider';
import { Link } from 'react-router-dom';

const Main = () => {
    const { getTransactions } = useContext(GlobalContext);

    useEffect(() => {
        getTransactions()
    }, [])

    return (
        <div className="container">
            <Header />
            <IncomeExpenses />
            <TransactionList />
            <Link to="/add">
                <button className="btn">Add</button>
            </Link>
        </div>
    );
}

export default Main;

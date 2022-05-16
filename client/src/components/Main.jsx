import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../context/StateProvider'
import { filterTransaction } from '../utils/utils'

import Header from './Header'
import TransactionList from './TransactionList'
import IncomeExpenses from './IncomeExpenses'

const Main = () => {
    const { transactions, getTransactions } = useContext(GlobalContext);
    const [date, setDate] = useState(new Date());
    const [data, setData] = useState([]);

    useEffect(() => {
        if (!transactions.length) {
            getTransactions()
        }
        
    }, [])

    useEffect(() => {
        setData(filterTransaction(transactions, date))
    }, [date, transactions])

    return (
        <div className="container">
            <div className="main__header">
                <Header date={date} setDate={setDate} />
                <IncomeExpenses data={data} />
                <div className="add_btn">
                    <Link to="/type"><button className="btn">Add Transaction</button></Link>
                </div>
            </div>
            <TransactionList data={data} />
        </div>
    );
}

export default Main;

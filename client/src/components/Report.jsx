import React, { useState, useEffect, useContext } from 'react'
import { GlobalContext } from '../context/StateProvider'

import Header from './Header'
import ReportChart from './ReportChart'
import { filterTransaction, formatMoney, totalExpense, totalIncome } from '../utils/utils'

const Report = () => {
    const { transactions, getTransactions } = useContext(GlobalContext);
    const [date, setDate] = useState(new Date());
    const [data, setData] = useState([]);

    useEffect(() => {
        if (!transactions.length) {
            getTransactions()
        }
    }, [])

    useEffect(() => {
        setData(filterTransaction(transactions, date));
    }, [date, transactions])

    return (
        <div className="container">
            <div className="main__header">
                <Header date={date} setDate={setDate} />
                <div className="balance">
                    <div className="expenses">
                        <h4>You've saved this month:</h4>
                        <h1>{formatMoney(totalIncome(data) - totalExpense(data))}<span>đ</span></h1>
                    </div>
                </div>
                <h3>Report</h3>
            </div>
            <ReportChart data={data} />
        </div>
    );
}

export default Report;
import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/StateProvider'
import { Link } from 'react-router-dom'
import { formatAmount, lookUpIcon } from '../context/utils'
import Popup from './Popup'
import '../css/FormType.css'

import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import CreateIcon from '@material-ui/icons/Create'
import LabelIcon from '@material-ui/icons/Label'
import EventNoteIcon from '@material-ui/icons/EventNote'

const Add = ({ location }) => {
    const [success, setSuccess] = useState(false); 
    const { addTransaction } = useContext(GlobalContext);
    const [transaction, setTransaction] = useState({
        type: location.state.type,
        category: location.state.category,
        name: null,
        date: null,
        amount: 0
    });

    const submit = (e) => {
        e.preventDefault();

        setTransaction({
            ...transaction, 
            amount: formatAmount(transaction.type, transaction.amount)
        });

        addTransaction(transaction);

        setSuccess(true);
    }
    
    return (
        <div className="container">
            <div className="main__header">
                <div className="title">
                    <Link to="/type"><ArrowBackIcon /></Link>
                    <div className="title__name">
                        <h3>Add Transaction</h3>
                    </div>
                </div>
            </div>
            {!success ? (<form className="form" onSubmit={e => submit(e)}>
                <div className="form__amount">
                    {lookUpIcon(location.state.type, location.state.category)}
                    <div className="expenses">
                        <h4>Amount</h4>
                        <div className="amount">
                            <span>đ</span>
                            <input
                                type="number"
                                className="form__field"
                                placeholder="0"
                                step="100"
                                onChange={e => setTransaction({ ...transaction, amount: e.target.value })}
                                required />
                        </div>
                    </div>
                </div>
                <div className="form__container">
                    <div className="form__info">
                        <h4>{transaction.type.toUpperCase()} - {transaction.category}</h4>
                        <span><Link to="/type"><CreateIcon /></Link></span>
                    </div>
                    <div className="form__info">
                        <LabelIcon />
                        <input className="form__field" placeholder="Name"
                            onChange={e => setTransaction({ ...transaction, name: e.target.value })} required />
                    </div>
                    <div className="form__info">
                        <EventNoteIcon />
                        <input className="form__field" placeholder="Date" type="date"
                            onChange={e => setTransaction({ ...transaction, date: e.target.value })} required />
                    </div>
                </div>
                <div className="add_btn2"><button className="btn">Add</button></div>
            </form>) : (<Popup />)}
        </div>
    );
}

export default Add;

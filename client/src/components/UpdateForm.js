import React from 'react'
import { lookUpIcon } from '../context/utils'
import '../css/FormType.css'

import CreateIcon from '@material-ui/icons/Create'
import EventNoteIcon from '@material-ui/icons/EventNote'
import LabelIcon from '@material-ui/icons/Label'

const UpdateForm = ({ transaction, setTransaction, setMode, submit, remove }) => {
    return (
        transaction && (<form onSubmit={e => submit(e)}>
            <div className="form__amount">
                {lookUpIcon(transaction.type, transaction.category)}
                <div className="expenses">
                    <h4>Amount</h4>
                    <div className="amount">
                        <span>đ</span>
                        <input
                            type="number"
                            className="form__field"
                            placeholder="0"
                            step="100"
                            value={transaction.amount}
                            onChange={e => setTransaction({ ...transaction, amount: e.target.value })} />
                    </div>
                </div>
            </div>
            <div className="form__container">
                <div className="form__info">
                    <h4>{transaction.type.toUpperCase()} - {transaction.category}</h4>
                    <span onClick={() => setMode("update")}><CreateIcon /></span>
                </div>
                <div className="form__info">
                    <LabelIcon />
                    <input className="form__field" placeholder="Name" value={transaction.name}
                        onChange={e => setTransaction({ ...transaction, name: e.target.value })} required />
                </div>
                <div className="form__info">
                    <EventNoteIcon />
                    <input className="form__field" placeholder="Date" type="date" value={transaction.date.slice(0, 10)}
                        onChange={e => setTransaction({ ...transaction, date: e.target.value })} required />
                </div>
            </div>
            <div className="add_btn2"><button className="btn">Update</button></div>
            <div className="add_btn2"><button className="btn" onClick={() => remove()}>Delete</button></div>
        </form>
    ));
}

export default UpdateForm;
import React, { useState } from 'react'
import { income, expenses } from '../context/category'
import '../css/FormType.css'

const UpdateType = ({ transaction, setTransaction, setMode }) => {
    const [active, setActive] = useState("expense");

    return (
        <div>
            <div className="type">
                <button
                    className={active === "expense" ? "second-btn active" : "second-btn"}
                    onClick={() => setActive("expense")}>Expenses</button>
                <button
                    className={active === "income" ? "second-btn active" : "second-btn"}
                    onClick={() => setActive("income")}>Income</button>
            </div>
            <ul id="type" className="list2 grid__container">
                {active === "expense" ? expenses.map((e, j) => (
                    <li key={j} onClick={() => {
                        setTransaction({ ...transaction, type: "expense", category: e.label });
                        setMode("main")
                    }}>
                        {e.icon}
                        <p>{e.label}</p>
                    </li>
                )) : income.map((i, j) => (
                    <li key={j} onClick={() => {
                        setTransaction({ ...transaction, type: "income", category: i.label });
                        setMode("main")
                    }}>
                        {i.icon}
                        <p>{i.label}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UpdateType;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../css/FormType.css";
import { income, expenses } from '../common/category';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const Type = () => {
    const [active, setActive] = useState("expense");

    return (
        <div className="container">
            <div className="main__header">
                <div className="title">
                    <Link to="/"><ArrowBackIcon /></Link>
                    <div className="title__name">
                        <h3>Choose a Category</h3>
                    </div>
                </div>
            </div>
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
                    <Link key={j} to={{ pathname: "/add", state: { type: "expense", category: e.label } }} >
                        <li>
                            {e.icon}
                            <p>{e.label}</p>
                        </li>
                    </Link>
                )) : income.map((i, j) => (
                    <Link key={j} to={{ pathname: "/add", state: { type: "income", category: i.label } }} >
                        <li>
                            {i.icon}
                            <p>{i.label}</p>
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    );
}

export default Type;
import React from 'react'
import { formatMoney, totalExpense, totalIncome } from '../context/utils'
import '../css/IncomeExpenses.css'

const IncomeExpenses = ({ data }) => {
  const income = totalIncome(data);
  const expense = totalExpense(data);

  return (
    <div className="balance">
      <div className="expenses">
        <h4>Expenses</h4>
        <h1>{formatMoney(expense)}<span>đ</span></h1>
      </div>
      <div className="expenses">
        <h4>Income</h4>
        <h1>{formatMoney(income)}<span>đ</span></h1>
      </div>
    </div>
  );
}

export default IncomeExpenses;

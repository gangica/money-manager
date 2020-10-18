import React, { useContext } from 'react';
import { GlobalContext } from '../context/StateProvider';
import Balance from './Balance';

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const income = transactions.filter(transaction => transaction.type === "income")
      .map(transaction => transaction.amount)
      .reduce((first, next) => (first += next), 0).toFixed(1);

  const expense = transactions.filter(transaction => transaction.type === "expense")
      .map(transaction => transaction.amount)
      .reduce((first, next) => (first += next), 0).toFixed(1);

  return (
    <div className="inc-exp-container">
      <div>
          <h5>Income</h5>
          <p id="money-plus" className="money plus">+{income}</p>
      </div>
      <div>
          <h5>Expense</h5>
          <p id="money-minus" className="money minus">{expense}</p>
      </div>
      <Balance />
    </div>
  );
}

export default IncomeExpenses;

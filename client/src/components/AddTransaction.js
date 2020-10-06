import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/StateProvider';

const AddTransaction = ({ location }) => {
  const { addTransaction } = useContext(GlobalContext);
  const { transaction } = location;
  const [name, setName] = useState(transaction.name);
  const [date, setDate] = useState(transaction.date);
  const [type, setType] = useState(transaction.type);
  const [category, setCategory] = useState(transaction.category);
  const [amount, setAmount] = useState(transaction.amount);

  const reset = () => {
    setName('');
    setDate('');
    setType('');
    setCategory('');
    setAmount(0);
  }

  const sendTransaction = (e) => {
    e.preventDefault();

    if (transaction.status === "add") {
      addTransaction({
        name,
        type,
        date,
        category,
        amount: (type === "income" ? Number(amount) : Number(0 - amount))
      })
    } else {
      console.log("edited");
    }

    reset();
  }

  return (
    <div>
      <h3>Add Transaction</h3>
      <form onSubmit={e => sendTransaction(e)}>
        <div className="form-control">
          <label>Type</label>
          <select onChange={e => setType(e.target.value)}>
            <option value="income" defaultValue>Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>
        <div className="form-control">
          <label>Category</label>
          <input type="text" placeholder="Enter category" value={category}
            onChange={e => setCategory(e.target.value)}></input>
        </div>
        <div className="form-control">
          <label>Name</label>
          <input type="text" placeholder="Enter transaction name" value={name}
            onChange={e => setName(e.target.value)}></input>
        </div>
        <div className="form-control">
          <label>Date</label>
          <input type="date" placeholder="Enter date" defaultValue={date}
            onChange={e => setDate(e.target.value)}></input>
        </div>
        <div className="form-control">
          <label>Amount</label>
          <input type="number" placeholder="Enter amount" value={amount}
            onChange={e => setAmount(e.target.value)}></input>
        </div>
        <button className="btn">{transaction.status === "add" ? "Add" : "Edit"}</button>
      </form>
    </div>
  );
}

export default AddTransaction;

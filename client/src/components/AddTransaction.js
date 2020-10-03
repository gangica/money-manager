import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/StateProvider';

const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [type, setType] = useState('income');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState(0);

  const reset = () => {
    setName('');
    setDate('');
    setType('');
    setCategory('');
    setAmount(0);
  }

  const sendTransaction = (e) => {
    e.preventDefault();
    
    addTransaction({
      name,
      type,
      date,
      category,
      amount: (type === "income" ? Number(amount) : Number(0-amount))
    })
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
             <input type="date" placeholder="Enter date" value={date}
             onChange={e => setDate(e.target.value)}></input>
         </div>
         <div className="form-control">
             <label>Amount</label>
             <input type="number" placeholder="Enter amount" value={amount}
             onChange={e => setAmount(e.target.value)}></input>
         </div>
         <button className="btn">Add</button>
     </form>
    </div> 
  );
}

export default AddTransaction;

import React from 'react';

const AddTransaction = () => {
  return (
    <div>
      <h3>Add Transaction</h3>
     <form>
         <div className="form-control">
             <label>Name</label>
             <input type="text" placeholder="Enter transaction name"></input>
         </div>
         <div className="form-control">
             <label>Date</label>
             <input type="date" placeholder="Enter date"></input>
         </div>
         <div className="form-control">
             <label>Amount</label>
             <input type="number" placeholder="Enter amount"></input>
         </div>
         <button className="btn">Add</button>
     </form>
    </div> 
  );
}

export default AddTransaction;

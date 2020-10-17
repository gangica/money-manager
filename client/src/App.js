import React from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import './App.css';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import { StateProvider } from './context/StateProvider';

function App() {
  return (
    <StateProvider>
      <Header />
      <div className="container">
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </StateProvider>
  );
}

export default App;

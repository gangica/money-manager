import React, { createContext, useReducer } from 'react';
import reducer from './reducer';

const initialState = {
    transactions: [
        { id: 1, type: 'income', name: 'Salary', date: '09-01', amount: 400 },
        { id: 2, type: 'expense', name: 'Gym', date: '09-01', amount: -200 },
        { id: 3, type: 'expense', name: 'PC', date: '09-01', amount: -150 },
        { id: 4, type: 'expense', name: 'Grab', date: '09-01', amount: -15 },
    ]
}

export const GlobalContext = createContext(initialState);

export const StateProvider = ({ children }) => {
    const [{ transactions }, dispatch] = useReducer(reducer, initialState);

    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANS',
            payload: id
        })
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANS',
            payload: transaction
        })
    }

    return (
        <GlobalContext.Provider value={{transactions, deleteTransaction, addTransaction}}>
            {children}
        </GlobalContext.Provider>
    )
    
};
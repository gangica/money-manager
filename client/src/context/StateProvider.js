import React, { createContext, useReducer } from 'react';
import reducer from './reducer';
import axios from 'axios';

const initialState = {
    // transactions: [
    //     { id: 1, type: 'income', name: 'Salary', date: '09-01', amount: 400 },
    //     { id: 2, type: 'expense', name: 'Gym', date: '09-01', amount: -200 },
    //     { id: 3, type: 'expense', name: 'PC', date: '09-01', amount: -150 },
    //     { id: 4, type: 'expense', name: 'Grab', date: '09-01', amount: -15 },
    // ]
    transactions: []
}

export const GlobalContext = createContext(initialState);

export const StateProvider = ({ children }) => {
    const [{ transactions }, dispatch] = useReducer(reducer, initialState);

    async function getTransactions() {
        try {
            const res = await axios.get('/api/v1/transactions');
            dispatch({
                type: 'GET_TRANS',
                payload: res.data.data
            })
        } catch(error) {
            console.log('error');
        }

    }

    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANS',
            payload: id
        })
    }

    async function addTransaction(transaction) {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        console.log(transaction);
        try {
            const res = await axios.post('/api/v1/transactions', transaction, config);
            console.log(res);
            dispatch({
                type: 'ADD_TRANS',
                payload: res.data.data
            })
        } catch(error) {
            console.log('error add');
        }
        
    }

    return (
        <GlobalContext.Provider value={{transactions, deleteTransaction, addTransaction, getTransactions}}>
            {children}
        </GlobalContext.Provider>
    )
    
};
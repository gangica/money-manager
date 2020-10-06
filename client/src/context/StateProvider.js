import React, { createContext, useReducer } from 'react';
import reducer from './reducer';
import axios from 'axios';

const initialState = {
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

    async function deleteTransaction(id) {
        try {
            await axios.delete(`/api/v1/transactions/${id}`);

            dispatch({
                type: 'DELETE_TRANS',
                payload: id
            })
        } catch(error) {
            console.log('error remove');
        }
        
    }

    async function addTransaction(transaction) {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await axios.post('/api/v1/transactions', transaction, config);
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
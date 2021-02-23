import React, { createContext, useReducer } from 'react';
import reducer from './reducer';
import axios from 'axios';

const initialState = {
    transactions: [],
    filterDate: null,
    dataToShow: []
}

export const GlobalContext = createContext(initialState);

export const StateProvider = ({ children }) => {
    const [{ transactions, dataToShow }, dispatch] = useReducer(reducer, initialState);

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
        const headers = {
            'Content-Type': 'application/json'
        }

        try {
            const res = await axios.post('/api/v1/transactions', transaction, headers);
            dispatch({
                type: 'ADD_TRANS',
                payload: res.data.data
            })
        } catch(error) {
            console.log('error add');
        }
    }

    async function editTransaction(id, transaction) {
        try {
            const res = await axios.put(`/api/v1/transactions/${id}`, transaction);
            dispatch({
                type: 'UPDATE_TRANS',
                payload: { id: id, data: res.data.data }
            })
        } catch(error) {
            console.log('error update');
        }
    }

    function setGlobalDate(date) {
        dispatch({
            type: 'FILTER_DATE',
            payload: date
        })
    }

    return (
        <GlobalContext.Provider value={{transactions, dataToShow, deleteTransaction, addTransaction, getTransactions, editTransaction, setGlobalDate}}>
            {children}
        </GlobalContext.Provider>
    )
    
};
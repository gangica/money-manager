const reducer = (state, action) => {
    switch (action.type) {
        case 'GET_TRANS':
            return {
                ...state,
                transactions: action.payload
            };
            
        case 'DELETE_TRANS':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            };
        
        case 'ADD_TRANS':
            return {
                ...state,
                transactions: [...state.transactions, action.payload]
            };

        case 'FILTER_TRANS':
            return {
                ...state,
                transactions: state.transactions.filter(
                    transaction => transaction.date.slice(0,7) === action.payload)
            }
        
        default:
            return state;
    }
};

export default reducer;
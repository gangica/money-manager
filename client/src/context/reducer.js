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
                transactions: state.transactions.filter(transaction => transaction._id !== action.payload)
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
        
        case 'UPDATE_TRANS':
            return {
                ...state,
                transactions: state.transactions.map(transaction => (transaction._id === action.payload.id) && (transaction = action.payload.data))
            }
        
        default:
            return state;
    }
};

export default reducer;
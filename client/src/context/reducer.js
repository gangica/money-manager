import { filterTransaction } from "./utils";

const reducer = (state, action) => {
    switch (action.type) {
        case 'GET_TRANS':
            return {
                ...state,
                transactions: action.payload,
                dataToShow: filterTransaction(action.payload, state.filterDate)
            };
            
        case 'DELETE_TRANS':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction._id !== action.payload),
                dataToShow: state.dataToShow.filter(transaction => transaction._id !== action.payload)
            };
        
        case 'ADD_TRANS':
            return {
                ...state,
                transactions: [...state.transactions, action.payload],
                dataToShow: [...state.dataToShow, action.payload]
            };

        case 'FILTER_DATE':
            return {
                ...state,
                filterDate: action.payload
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
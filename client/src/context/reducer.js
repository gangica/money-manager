import getMonthYear from "../dateUtils";

const reducer = (state, action) => {
    switch (action.type) {
        case 'GET_TRANS':
            state.transactions = action.payload;
            return {
                ...state,
                dataToShow: state.transactions.filter(transaction => {
                    let d1 = getMonthYear(transaction.date);
                    let d2 = getMonthYear(state.filterDate);
                    if (d1.month === d2.month && d1.year === d2.year) {
                        return transaction;
                    }
                })
            };
            
        case 'DELETE_TRANS':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction._id !== action.payload),
                dataToShow: state.transactions.filter(transaction => transaction._id !== action.payload)
            };
        
        case 'ADD_TRANS':
            return {
                ...state,
                transactions: [...state.transactions, action.payload],
                dataToShow: [...state.transactions, action.payload]
            };

        case 'FILTER_TRANS':
            return {
                ...state,
                filterDate: action.payload
                // dataToShow: state.transactions.filter(transaction => {
                //     let d1 = getMonthYear(transaction.date);
                //     let d2 = getMonthYear(action.payload);
                //     if (d1.month === d2.month && d1.year === d2.year) {
                //         return transaction;
                //     }
                // })
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
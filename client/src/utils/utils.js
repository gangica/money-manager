import { income, expenses } from "../common/category";

export const getMonthYear = (date) => {
    let d = new Date(date);
    let month = d.getMonth() + 1;
    let year = d.getFullYear();
    return { month, year };
}

export const filterTransaction = (data, date) => {
    return data.filter(transaction => {
        let current = getMonthYear(transaction.date);
        let filter = getMonthYear(date)
        if (current.month === filter.month && current.year === filter.year) {
            return transaction
        }
    })
}

export const formatDate = (date) => {
    let f = new Date(date);
    return f.toDateString().slice(4,10);
}

export const formatAmount = (type, amount) => {
    return (type === "income" && Number(amount) > 0) ? Number(amount) : Number(0 - amount)
}

export const formatMoney = (amount) => {
    let amountString = Math.round(amount).toString();
    let lenAmountString = Math.round(amount).toString().length;
    let formatted = "";
    for (let i = lenAmountString - 1; i >= 0; i--) {
        if (i % 3 === ((lenAmountString - 1) % 3 ) && i !== lenAmountString - 1 && amountString[i] !== "-") {
            formatted = "," + formatted
        }
        
        formatted = amountString[i] + formatted
    }
    return formatted;
}

export const totalExpense = (data) => {
    return data.filter(transaction => transaction.type === "expense")
        .map(transaction => transaction.amount)
        .reduce((first, next) => (first += next), 0).toFixed(0);
}

export const totalIncome = (data) => {
    return data.filter(transaction => transaction.type === "income")
        .map(transaction => transaction.amount)
        .reduce((first, next) => (first += next), 0).toFixed(0);
}

export const lookUpIcon = (type, label) => {
    if (type === "expense") {
        return expenses.filter(item => item.label === label)[0].icon;
    } 
    
    return income.filter(item => item.label === label)[0].icon;
}
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
    return f.toLocaleDateString();
}

export const formatAmount = (type, amount) => {
    return (type === "income" && Number(amount) > 0) ? Number(amount) : Number(0 - amount)
}
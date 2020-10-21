const getMonthYear = (date) => {
    let d = new Date(date);
    let month = d.getMonth() + 1;
    let year = d.getFullYear();
    return { month, year };
}

export default getMonthYear;
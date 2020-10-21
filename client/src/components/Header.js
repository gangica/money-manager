import React, { useContext, useState, useEffect } from 'react';
import PieChartIcon from '@material-ui/icons/PieChart';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FilterListIcon from '@material-ui/icons/FilterList';
import { IconButton } from '@material-ui/core';
import { GlobalContext } from '../context/StateProvider';

import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import getMonthYear from '../dateUtils';

const Header = () => {
  const { filterTransaction, getTransactions } = useContext(GlobalContext);
  const [selectedDate, setSelectedDate] = useState(new Date());
  
  const handleDateChange = (date) => {
    setSelectedDate(date);
  }

  useEffect(() => {
    filterTransaction(selectedDate.toDateString());
  }, [])

  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <div className="username">
            <h3>Money Manager</h3>
        </div>
        <IconButton>
          <PieChartIcon />
        </IconButton>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </div>

      <div className="sidebar_search">
        <div className="sidebar_searchContainer">
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
              variant="inline"
              openTo="year"
              views={["year", "month"]}
              value={selectedDate}
              onChange={handleDateChange}
            />
          </MuiPickersUtilsProvider>
        </div>
        <FilterListIcon onClick={() => {filterTransaction(selectedDate); getTransactions()}}/>
      </div>
    </div>
  );
}

export default Header;
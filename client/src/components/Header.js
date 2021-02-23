import React, { useContext, useState, useEffect } from 'react';
import PieChartIcon from '@material-ui/icons/PieChart';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FilterListIcon from '@material-ui/icons/FilterList';
import { IconButton } from '@material-ui/core';
import { GlobalContext } from '../context/StateProvider';

import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";

const Header = () => {
  const { setGlobalDate, getTransactions } = useContext(GlobalContext);
  const [localDate, setLocalDate] = useState(new Date());
  
  const handleDateChange = (date) => {
    setLocalDate(date);
  }

  useEffect(() => {
    setGlobalDate(localDate.toDateString());
  }, [])

  useEffect(() => {
    getTransactions();
  }, [setGlobalDate])

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
              value={localDate}
              onChange={handleDateChange}
            />
          </MuiPickersUtilsProvider>
        </div>
        <FilterListIcon onClick={() => setGlobalDate(localDate)}/>
      </div>
    </div>
  );
}

export default Header;
import React from 'react'
import { Link } from 'react-router-dom'
import "../css/Header.css"

import DateFnsUtils from "@date-io/date-fns"
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers"
import AssessmentIcon from '@material-ui/icons/Assessment'
import HomeIcon from '@material-ui/icons/Home'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { IconButton } from '@material-ui/core'

const Header = ({ date, setDate }) => {
  return (
    <div className="header">
      <div className="header__container">
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DatePicker
            variant="inline"
            openTo="year"
            views={["year", "month"]}
            value={date}
            onChange={d => setDate(d)}
          />
        </MuiPickersUtilsProvider>
      </div>
      <div className="icons__container">
        {window.location.pathname === "/report" ? (<Link to="/">
          <IconButton><HomeIcon /></IconButton>
        </Link>) : (<Link to="/report">
          <IconButton><AssessmentIcon /></IconButton>
        </Link>)}
        <IconButton><MoreVertIcon /></IconButton>
      </div>
    </div>
  );
}

export default Header;
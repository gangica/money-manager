import React from 'react'
import { Link } from 'react-router-dom'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'

const Popup = () => {
    return (
        <div>
            <div className="list__container">
                <div className="success">
                    <CheckCircleIcon style={{ color: '#404040' }} />
                </div>
                <h3>Successful</h3>
            </div>
            <div className="add_btn2">
                <Link to='/'>
                    <button className="btn">Back to Home</button>
                </Link>
            </div>
        </div>
    );
}

export default Popup;

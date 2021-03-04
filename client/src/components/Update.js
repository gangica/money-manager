import React, { useState, useContext, useEffect } from 'react'
import { GlobalContext } from '../context/StateProvider'
import { Link } from 'react-router-dom'
import axios from 'axios'

import UpdateType from './UpdateType'
import Popup from './Popup'
import UpdateForm from './UpdateForm'

import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import '../css/FormType.css'

const Update = ({ location }) => {
  const { updateTransaction, deleteTransaction } = useContext(GlobalContext);
  const { transactionId } = location.state;
  const [transaction, setTransaction] = useState(null);
  const [popup, setPopup] = useState("main");

  let body;

  const submit = (e) => {
    e.preventDefault();
    updateTransaction(transactionId, transaction);
    setTransaction(null);
    setPopup("success");
  }

  const remove = (id) => {
    deleteTransaction(transactionId);
    setPopup("success")
  }

  useEffect(() => {
    axios.get(`/api/v1/transactions/${transactionId}`)
      .then(res => setTransaction(res.data.data))
  }, [])

  if (popup === "main") {
    body = <UpdateForm transaction={transaction} setTransaction={setTransaction} 
      setMode={setPopup} submit={submit} remove={remove} />
  } else if (popup === "update") {
    body = <UpdateType transaction={transaction} setTransaction={setTransaction} setMode={setPopup} />
  } else {
    body = <Popup />
  }

  return (
    <div className="container">
        <div className="main__header">
          <div className="title">
            <Link to="/"><ArrowBackIcon /></Link>
            <div className="title__name">
              <h3>Update Transaction</h3>
            </div>
          </div>
        </div>
        {body}
    </div>
  )
}

export default Update;

const express = require('express');
const router = express.Router();
const { getTransactions, addTransactions, deleteTransactions } = require('../controllers/transactions');

// send get-post request
router.route('/').get(getTransactions).post(addTransactions);

// send delete request
router.route('/:id').delete(deleteTransactions);

module.exports = router;
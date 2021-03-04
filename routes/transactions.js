const express = require('express');
const router = express.Router();
const { getTransactions, addTransactions, deleteTransactions, updateTransaction, getTransactionById } = require('../controllers/transactions');

// send get-post request
router.route('/').get(getTransactions).post(addTransactions);

// send delete request
router.route('/:id').delete(deleteTransactions);

// get by ID
router.route('/:id').get(getTransactionById);

// edit transaction
router.route('/:id').put(updateTransaction);

module.exports = router;
const express = require('express');
const router = express.Router();
const { getTransactions, addTransactions, deleteTransactions, editTransaction } = require('../controllers/transactions');

// send get-post request
router.route('/').get(getTransactions).post(addTransactions);

// send delete request
router.route('/:id').delete(deleteTransactions);

// edit transaction
router.route('/:id').put(editTransaction);

module.exports = router;
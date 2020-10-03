const Transaction = require("../models/Transaction");

// Get all transactions
exports.getTransactions = async (req, res, next) => {
    try {
        const transactions = await Transaction.find();
        
        return res.status(200).json({
            success: true,
            data: transactions
        })

    } catch(error) {
        return res.status(500).json({
            success: false,
            error: 'Server error'
        })
    }
}

// Add transactions
exports.addTransactions = async (req, res, next) => {
    try {
        const transaction = await Transaction.create(req.body);

        return res.status(201).json({
            success: true,
            data: transaction
        })
    } catch(error) {
        return res.status(500).json({
            success: false,
            error: 'Server error'
        })
    }
}

// Delete transactions
exports.deleteTransactions = (req, res, next) => {
    res.send('DELETE transactions');
}
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
exports.deleteTransactions = async (req, res, next) => {
    try {
        const transaction = await Transaction.findById(req.params.id);

        if (!transaction) {
            return res.status(404).json({
                success: false,
                error: 'No transaction found'
            })
        }

        await transaction.remove();
        
        return res.status(200).json({
            success: true,
            data: {}
        })

    } catch(error) {
        return res.status(500).json({
            success: false,
            error: 'Server error'
        })
    }
}

// Edit transaction
exports.editTransaction = async (req, res, next) => {
    try {
        const transaction = await Transaction.findById(req.params.id);

        transaction.name = req.body.name;
        transaction.type = req.body.type;
        transaction.date = req.body.date;
        transaction.category = req.body.category;
        transaction.amount = req.body.amount;

        await transaction.save();

        return res.status(200).json({
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
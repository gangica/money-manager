const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const transactions = require('./routes/transactions');
dotenv.config({ path: './config.env'});
const { getTransactions, updateTransaction } = require('./controllers/transactions');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// connect to mongodb
const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_CLUSTER, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        });
        console.log('db connected');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

connectDB();

if (process.env.NODE_ENV === 'development') {
    // Exprees will serve up production assets
    app.use(express.static('client/build'));

    // Express serve up index.html file if it doesn't recognize route
    app.get('/', (req, res) => {
        res.sendFile(resolve(getTransactions, 'client/build/index.html'))
    })
    
    app.get('/:id', (req, res) => {
        res.sendFile(resolve(updateTransaction, 'client/build/index.html'))
    })
}

// get transactions api from router
app.use('/api/v1/transactions', transactions);

app.listen(PORT, console.log('server is running'));


const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const transactions = require('./routes/transactions');
dotenv.config({ path: './config.env'});

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

if (process.env.NODE_ENV === "production") {
    app.use(express.static("build"));
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname,  "build", "index.html"));
    });
  }

// get transactions api from router
app.use('/api/v1/transactions', transactions);

app.listen(PORT, console.log('server is running'));


const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
const connectDatabase = require('./config/connectDatabase');
dotenv.config({path: path.join(__dirname, 'config', 'config.env')})

const products = require('./routes/product');
const order = require('./routes/order');

connectDatabase();

app.use(express.json())

app.use('/api/v1/',products);
app.use('/api/v1/',order);

app.listen(process.env.PORT, () =>{
    console.log(`Server listening to port ${process.env.PORT} in production`)
})

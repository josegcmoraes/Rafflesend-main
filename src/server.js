const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/index');
const cors = require('cors');
const app = express();

// mongoose.connect('?');
mongoose.connect('mongodb://jose:omnistack@cluster0-shard-00-00-rljxi.mongodb.net:27017,cluster0-shard-00-01-rljxi.mongodb.net:27017,cluster0-shard-00-02-rljxi.mongodb.net:27017/raffleStorage?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);
app.use((request, response, next) => {
    response.header("Access-Control-Allow-Origin", "*")
    response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    next()
});

module.exports = app
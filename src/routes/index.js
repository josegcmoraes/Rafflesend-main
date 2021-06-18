const { Router } = require('express');
const RaffleController = require('../controllers/RaffleController');
const raffle = require('./Raffle');

const routes = Router();

// routes.use(raffle);

routes.get('/raffles', RaffleController.index);
routes.post('/raffles', RaffleController.store);

module.exports = routes;
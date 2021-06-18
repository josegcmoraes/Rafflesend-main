const Raffle = require('../models/Raffle');
var mongoose = require('mongoose');

module.exports = {
  async store(request, response) {
    const { quantity, statusRaffle = [] } = request.body;

    // Criar a quantidade de rifas, inicialmente com valor false
    for (let i = 0; i < quantity; i++) {
      statusRaffle.push(false);
    }

    let raffle = await Raffle.create({
      quantity,
      statusRaffle,
    });

    return response.json(raffle);
  },

  async index(request, response) {
    const raffles = await Raffle.find();
    return response.json(raffles)
  },

  async update(request, response) {

    // Update an expression
    // app.put('/expressions/:id', (req, res, next) => {
    // const expressionIndex = getIndexById(req.params.id, expressions);
    // if (expressionIndex !== -1) {
    //     updateElement(req.params.id, req.query, expressions);
    //     res.send(expressions[expressionIndex]);
    //   } else {
    //     res.status(404).send();
    //   }
    // });
  },

  async clear(request, response) {

  }
}
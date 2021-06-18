const mongoose = require('mongoose');

const RaffleSchema = new mongoose.Schema({
    quantity: Number,
    statusRaffle: []

    // raffle: {
    //     // type: [Boolean],
    //     quantity: Number,
    //     status: [Boolean]
    //     // default: [Boolean],
    // }
});

module.exports = mongoose.model("Raffle", RaffleSchema);
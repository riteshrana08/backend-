const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
  flightNumber: String,
  origin: String,
  destination: String,
  departureTime: Date,
  price: Number,
  seatsAvailable: Number,
});

module.exports = mongoose.model('Flight', flightSchema);

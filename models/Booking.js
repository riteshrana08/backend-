const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  flight: { type: mongoose.Schema.Types.ObjectId, ref: 'Flight' },
  passengerName: String,
  passengerEmail: String,
  seatsBooked: Number,
  status: { type: String, default: 'confirmed' }, // confirmed or cancelled
});

module.exports = mongoose.model('Booking', bookingSchema);

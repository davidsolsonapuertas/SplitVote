const mongoose = require('./index');
const { Schema } = mongoose;

const weekdaySchema = new Schema({
  weekday: String,
  bookings: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

const Weekday = mongoose.model('Weekday', weekdaySchema);
module.exports = Weekday;

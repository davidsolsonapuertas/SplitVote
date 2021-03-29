const mongoose = require('./index');
const { Schema } = mongoose;

const userSchema = new Schema({
  username: String,
  pet: [String],
  picture: String,
});

const User = mongoose.model('User', userSchema);
module.exports = User;

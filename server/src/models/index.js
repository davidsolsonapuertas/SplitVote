const mongoose = require('mongoose');

// TODO change!
mongoose.connect('mongodb://localhost:27017/splitpets', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => console.log('Db connected'));

module.exports = mongoose;

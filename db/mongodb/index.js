const mongoose = require('mongoose');
const options = { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
if (process.env.MONGODB_URI){
  mongoose.connect(process.env.MONGODB_URI, options)
} else {
  mongoose.connect('mongodb://localhost:27017/badmovies', options);
}

const db = mongoose.connection;
mongoose.Promise = Promise;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to db...');
});

const badMoviesSchema = mongoose.Schema({
  id: {type: Number, unique: true},
  title: String,
  poster_path: String,
  vote_average: Number,
  release_date: Date
});

module.exports = {
  db,
  badMoviesSchema
}
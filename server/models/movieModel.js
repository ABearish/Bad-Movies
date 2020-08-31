const {db, badMoviesSchema} = require('../../db/mongodb');
const badMoviesModel = db.model('badMovies', badMoviesSchema);

const retrieveFavorites = () => {
  return badMoviesModel.find({}).exec();
}

const saveFavorites = (movie) => {
  const badMoviesInstance = new badMoviesModel({
    id: movie.id,
    title: movie.title,
    poster_path: movie.poster_path,
    vote_average: movie.vote_average,
    release_date: movie.release_date
  });
  return badMoviesInstance.save()
  .then(() => 201)
  .catch(() => 400);
}

const removeMovie = (movieID) => {
 return badMoviesModel.deleteOne({id: movieID}).exec()
 .then((results) => {
   return (results.deletedCount > 0) ? 200 : 204
 })
}

module.exports = {
  retrieveFavorites,
  saveFavorites,
  removeMovie,
}
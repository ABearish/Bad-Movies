const {saveFavorites, removeMovie, retrieveFavorites} = require('../models/movieModel.js');
const { getGenreHelper, getSearchHelper } = require('../helpers/apiHelpers.js');

module.exports = {
  getSearch: (req, res) => {
    return getSearchHelper(req.query.id)
    .then(({data}) => {
      res.json(data.results);
    })
    .catch(() => res.sendStatus(500))
  },
  getGenres: (req, res) => {
    return getGenreHelper()
    .then((results) => {
      res.json(results);
    })
    .catch(() => res.sendStatus(500))
  },
  saveMovie: (req, res) => {
    const movie = req.body;
    return saveFavorites(movie)
    .then((results) => res.sendStatus(results))
    .catch(() => res.sendStatus(500)) 
  },
  deleteMovie: (req, res) => {
    const movieID = req.body.id;
    return removeMovie(movieID)
    .then((results) => res.sendStatus(results))
    .catch(() => res.sendStatus(500));
  },  
  getFavorites: (req, res) => {
    return retrieveFavorites()
    .then((results) => {
      res.json(results)
    })
    .catch(() => res.sendStatus(500));
  }
}
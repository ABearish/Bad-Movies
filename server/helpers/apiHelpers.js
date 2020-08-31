const axios = require('axios');
  const getGenreHelper = () => {
    return axios.get((`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.API_KEY}`))
    .then(({data}) => {
      return data;
    })
    .catch((err) => console.error(err));
  }
  
  const getSearchHelper = (id) => {
    const options = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&region=US&sort_by=vote_average.asc&include_adult=false&include_video=false&page=1&vote_average.gte=1&with_genres=${id}
    `
    return axios.get(options)
    .then((results) => {
      return results;
    })
    .catch((err) => console.error(err));
  }

module.exports = {
  getGenreHelper,
  getSearchHelper
}
// Don't forget to export your functions and require them within your server file 
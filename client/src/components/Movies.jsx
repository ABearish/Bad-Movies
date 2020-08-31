import React from 'react';

class Movies extends React.Component {
  constructor(props) {
    super(props)

  }
  render() {
    return (
      <ul className="movies">
        {this.props.movies.map((movie) => {
          return (
            <li className="movie_item" key = {movie.id} value = {movie.id}
            onClick ={() => {this.props.showFaves ? this.props.deleteMovie(movie.id) : this.props.saveMovie(movie)}}
            >
              <img src={movie.poster_path !== null ? `http://image.tmdb.org/t/p/w185${movie.poster_path}` : null}/>
              <div className="movie_description">
                <h2>{movie.title}</h2>
                <section className="movie_details">
                  <div className="movie_year">
                    <span className="title">Year</span>
                    <span>{movie.release_date.slice(0,4)}</span>
                  </div>
                  <div className="movie_rating">
                    <span className="title">Rating</span>
                    <span>{movie.vote_average}</span>
                  </div>
                </section>
              </div>
            </li>
          )
        })}
      </ul>
    );
  }
}

export default Movies;
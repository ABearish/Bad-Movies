import React from 'react';
import axios from 'axios';
import { set } from 'mongoose';

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      genres: [],
      id: 12
    };
    this.getGenres = this.getGenres.bind(this);
    this.submit = this.submit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {
    this.getGenres();
  }
  submit(id) {
    console.log(id)
    this.props.getMovies(id);
  }
  onChange(e) {
    this.setState({
      id: e.target.value
    })
  }
  getGenres() {
    return axios.get('movies/genres')
    .then(({data}) => {
      this.setState({
        genres: data.genres
      })
    })
    .catch((err) => console.log(err))
  }

  render() {
    return (
      <div className="search">
        <button onClick={() => {this.props.swapFavorites()}}>{this.props.showFaves ? "Show Results" : "Show Favorites"}</button>
        <br/><br/>
        <select onChange={(e) => this.onChange(e)}>
          {!this.state.genres.length ? null : this.state.genres.map((genre) => <option key = {genre.id} value = {genre.id}>{genre.name}</option>)}
        </select>
        <button onClick={(e) => this.submit(this.state.id)}>Search</button>
      </div>
    );
  }
}

export default Search;
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
import TMDB from './TMDB';
import FilmRow from './FilmRow';

class App extends Component {
  render() {
    let allFilms = TMDB.films.map( (film, index) => (<FilmRow film={film} />))
    return (
      <div className="film-library">
        <div className="film-list">
          <h1 className="section-title">FILMS</h1>
          {allFilms}
        </div>
        <div className="film-details">
          <h1 className="section-title">DETAILS</h1>
        </div>
      </div>
    );
  }
}

export default App;

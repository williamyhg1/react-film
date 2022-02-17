/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import FilmPoster from './FilmPoster';
import './FilmRow.css';
import Fave from './Fave'

const Filmrow = function (props) {
  const date = new Date(props.film.release_date);
  const fullYear = date.getFullYear();

  return (
    <div className="film-row">
      <FilmPoster film={props.film} />
      <div className="film-summary">
        <h1>{props.film.title}</h1>
        <p className="year">{fullYear}</p>
      </div>
      <Fave />
    </div>
  );
};

export default Filmrow;

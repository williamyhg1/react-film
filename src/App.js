/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import "./App.css";
import Filmlisting from "./FilmListing";
import Filmdetails from "./FilmDetails";
import TMDB from "./TMDB";

class App extends Component {
  render() {
    return (
      <div className="film-library">
        <Filmlisting films={TMDB.films} />
        <Filmdetails films={TMDB.films} />
      </div>
    );
  }
}

export default App;

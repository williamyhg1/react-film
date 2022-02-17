import React from "react";
import FilmRow from "./FilmRow";

const Filmlisting = (props) => {
  const allFilms = props.films.map((film) => {
    return <FilmRow film={film} key={film.id} />;
  });
  
  // handleFilterClick()
  
  return (
    <div className="film-list">
      <h1 className="section-title">FILMS</h1>
      {allFilms}
    </div>
  );
};

export default Filmlisting;

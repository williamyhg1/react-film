import React from "react";

const FilmPoster = (props) => {
  const posterUrl = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${props.film.poster_path}`;
  const title = props.film.title;

  return <img src={posterUrl} alt={`"${title}" Movie poster`} />;
};

export default FilmPoster;

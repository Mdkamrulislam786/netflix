import React, { useState, useEffect } from "react";
import axios from "../axios";
import "./Row.css";

const baseUrl = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl,isLargeRow}) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      {/* title */}
      <h2>{title}</h2>
      <div className="row-posters" >
        {/*  several row posters */}
        {movies.map((movie) => {
          return (
            <img
              key={movie.id}
              src={`${baseUrl}${isLargeRow?movie.poster_path: movie.backdrop_path}`}
              alt={movie.name}
              className={`row-poster ${isLargeRow && "row-posterLarge"}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Row;

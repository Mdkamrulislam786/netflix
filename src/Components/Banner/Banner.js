import React, { useState, useEffect } from "react";
import axios from "../../axios";
import requests from "../../request";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovies(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);


  const handlePlay = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.original_name || movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => {
          alert(`${error}`);
        });
    }
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  //hides all the words.... after n number of words
  function trancate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  //  onClick={()=> handlePlay()}

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner-contents">
        {/* title */}
        <h1 className="banner-title">
          {movies?.title || movies?.name || movies?.original_name}
        </h1>
        {/* div-2btn */}
        <div className="banner_buttons">
          <button
            className="banner_button"
            data-toggle="modal"
            data-target="#exampleModal"
            onClick={() => handlePlay(movies)}
          >
            Play
          </button>
          <Link to="/mylist">
            <button className="banner_button">My List</button>
          </Link>
        </div>
        {/* description */}
        <h1 className="banner-description">
          {trancate(movies?.overview, 150)}
        </h1>
      </div>

      <div className="banner-fade-bottom" />
      <div style={{ float: "left", width: "100%" }}>
        {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
      </div>
    </header>
  );
};

export default Banner;

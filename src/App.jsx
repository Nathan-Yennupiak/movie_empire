import { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

const API_URL = " http://www.omdbapi.com?apikey=8191f3a7";

const movie1 = {
  Title: "Batman Begins",
  Year: "2005",
  imdbID: "tt0372784",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BODIyMDdhNTgtNDlmOC00MjUxLWE2NDItODA5MTdkNzY3ZTdhXkEyXkFqcGc@._V1_SX300.jpg",
};

const App = () => {
  const [movies, setMoviess] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMoviess(data.Search);
  };

  useEffect(() => {
    searchMovies("Batman");
  }, []);
  return (
    <div className="app">
      <h1>Movie Empire</h1>

      <div className="search">
        <input
          type="text"
          placeholder="Search for movies"
          value={"Batman"}
          onChange={() => {}}
        />

        <img src={SearchIcon} alt="search" onChange={() => {}} />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          <MovieCard movie1={movie1} />
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;

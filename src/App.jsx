import { useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";

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
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
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

        <img src={SearchIcon} alt="search" onChange={()=>{}} />
      </div>

      <div className="container">
        <div className="movie">
          <div>
            <p>{movie1.Year}</p>
          </div>

          <div>
            <img src={movie1.Poster !== 'N/A'?  movie1.Poster : 'https://via.placeholder.com/400' } alt={movie1.Title} />
          </div>

        </div>
      </div>

    </div>
  );
};

export default App;

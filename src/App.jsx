import { useEffect } from 'react'
import "./App.css";

const API_URL = " http://www.omdbapi.com?apikey=8191f3a7"

// const movie1 = {
//     "Title": "Batman Begins",
//     "Year": "2005",
//     "imdbID": "tt0372784",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BODIyMDdhNTgtNDlmOC00MjUxLWE2NDItODA5MTdkNzY3ZTdhXkEyXkFqcGc@._V1_SX300.jpg"
// }

const App = () => {
  const searchMovies = async(title)=> {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()

    console.log(data.Search)
  }

  useEffect(()=>{

    searchMovies('spiderman')

  }, [])
   
  return (
    <div className='app'>
        <h1>App</h1>
    </div>
  )
}

export default App
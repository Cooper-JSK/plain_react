import { useState, useEffect} from 'react'
import './App.css';
import SearchIcon from './search.svg'
import MovieCard from './MovieCard';

const API_URL = 'http://www.omdbapi.com?apikey=d4b80d10'

const movie1 = {
Poster : "https://m.media-amazon.com/images/M/MV5BZDFmYTM4NzAtNWM0ZC00MGJlLWEyYzQtYzA3ZTFiNzc1YjllXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_SX300.jpg",
Title:"Godzilla",
Type: "movie",
Year: "2014",
imdbID: "tt0831387"
}




const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
       const response = await fetch (`${API_URL}&s=${title}`);   
       const data= await response.json();
       
       setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('Avengers')

    }, []);

  return (
    <div className = "app">
        <h1>
            MovieLand
        </h1>
        <div className = "search">
            <input 
            placeholder='Search for movies'
            type = 'text'
            value = {searchTerm}
            onChange= {(e) => setSearchTerm(e.target.value)}
            />
            <img 
            src = {SearchIcon}
            alt = 'search'
            onClick = {() => searchMovies(searchTerm)}
            />
        </div>

        {
            movies?.length > 0 ?
            (
                <div className = "container">
                    {movies.map((movie) => (
                    <   MovieCard movie = {movie} />
                    ))}
                </div>
            ) : (
                <div className = "empty">
                    <h2>No Movies Found</h2>
                </div>)
        }

    </div>
   
  )
}

export default App
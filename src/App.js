import { useEffect} from 'react'
import './App.css';
import SearchIcon from './search.svg'


const API_URL = 'http://www.omdbapi.com?apikey=d4b80d10'

const movie1 = {
Poster : "https://m.media-amazon.com/images/M/MV5BZDFmYTM4NzAtNWM0ZC00MGJlLWEyYzQtYzA3ZTFiNzc1YjllXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_SX300.jpg",
Title:"Godzilla",
Type: "movie",
Year: "2014",
imdbID: "tt0831387"
}




const App = () => {

    const searchMovies = async (title) => {
       const response = await fetch (`${API_URL}&s=${title}`);   
       const data= await response.json();
       
       console.log(data.Search);
    }

    useEffect(() => {
        searchMovies('Godzilla')

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
            value = "superman"
            onChange= {() => {}}
            />
            <img 
            src = {SearchIcon}
            alt = 'search'/>
            onClick = {() => {}}

        </div>
        <div className = "container">
            <div className = "movie">
                <div>
                    <p>{movie1.Year}</p>
                </div>
                <div>
                    <img src = {movie1.Poster} alt = {movie1.Title}/>
                </div>
            </div>

        </div>

    </div>
   
  )
}

export default App
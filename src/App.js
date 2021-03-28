
import { useEffect,useState } from "react";
import './App.css';
import Movie from './Movie';





const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1"
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query="


function App() {
  const [isLoading, setIsloading] = useState(true)
  const [movies,setMovies] = useState([]);
  const [search,setSearch]= useState("");
  const [filteredMovies,SetFilteredMovies] =useState([]);


  useEffect(()=>{

    const fetchmovie = async () => {
      try {
        const res = await fetch(FEATURED_API)
        const data = await res.json()
        setMovies(data.results)
        setIsloading(false)
      } catch (error) {
        console.log(error)
        setIsloading(false)
      }
    }
 
    fetchmovie()
  },[])

  useEffect(() => {
    SetFilteredMovies(
      movies.filter((movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, movies]);
  
  return (
    <div className="mid">
      
      <input type="text" placeholder="search" className="inputa" onChange={ e => setSearch(e.target.value)}></input>
      <button className="yeet">ADD FILM</button>
    <div className="App">
      
  
      {isLoading ? <p>isLoading...</p> : filteredMovies.map((movie)=><Movie key={movie.div}  key={movie.div} {...movie}></Movie>)}
     
      
    </div>
    </div>
  );
}

export default App;

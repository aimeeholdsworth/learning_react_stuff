import Movie from './Movie';
import MovieContainer from './MovieContainer';
import {useState} from 'react';
import axios from 'axios';
import App from './App.js';

// const [movies, setMovies] = useState([]);
// const [search, setSearch] = useState("");


const findMovie = (props) => {
    

    const search = props.app(

    
    
    axios.get("http://www.omdbapi.com/?apikey=88da2869&s=" + search)
      .then(response => {
        console.log(response)
        setMovies(response.data.Search);
      })

      )

      return(
        <>

            {setSearch};
            {/* <input placeholder="Search" type="text" value={search}
          onInput={e => setSearch(e.target.value)}/>

            <button onClick={findMovie}>Search <i class="fa fa-search-plus"></i></button><br></br>
            {search} */}
        </>
    )
  }


  

  export default findMovie;
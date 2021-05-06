import Movie from './Movie';
import MovieContainer from './MovieContainer';
import {useState} from 'react';
import axios from 'axios';
import App from './App.js';



const SearchBar = (props) => {

    const search = props.search;
    const setSearch = props.setSearch;
    const findMovie = props.findMovie;


      return(
        <>

            
            <input placeholder="Search" type="text" value={search}
          onInput={e => setSearch(e.target.value)}/>

            <button onClick={findMovie}>Search <i class="fa fa-search-plus"></i></button><br></br>
            
        </>
    )
  }


  

  export default SearchBar;
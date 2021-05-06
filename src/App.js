import logo from './logo.svg';
import './App.css';
import Dice from './Dice.js';
import Header from './header.jsx';
import Footer from './Footer.jsx';
import ComponentWithProps from './ComponentWithProps';
import Milesahead from './Milesahead';
import Clock from './Clock.jsx';
import Userinputform from './Userinputform';
import Car from './Car';
import AddGamers from './AddGamers';
import GameRoom from './GameRoom';
import Game from './Game';

import {useState} from 'react';
import axios from 'axios';

import EmployeeInfo from './EmployeeInfo';
import FilmRequest from './FilmRequest';
import MovieContainer from './MovieContainer';
import Search from './Search';




function App() {

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [data, setData] = useState("");

  // const findMovie = (event) => {
  //   axios.get("http://www.omdbapi.com/?apikey=88da2869&s=" + search)
  //     .then(response => {
  //       console.log(response)
  //       setMovies(response.data.Search);
  //     })
  // }


  

  return (
    <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <div className="App">
        <h1>Film Search!</h1>
        {/* <input placeholder="Search" type="text" value={search}
          onInput={e => setSearch(e.target.value)}/>

        <button onClick={findMovie}>Search <i class="fa fa-search-plus"></i></button><br></br> */}

        <Search />
        <MovieContainer movies={movies} />
      </div>
    


    {/* <Userinputform/>
    <Clock/>
    <Car/> 
    <Game/>
    <EmployeeInfo/>*/}

    
    
    
    </>
  );
}

export default App;

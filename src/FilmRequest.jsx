import {useState} from 'react';
import axios from 'axios';

const FilmRequest = () => {

    const [movieTitle, setMovieTitle] = useState("");
    const [search, setSearch] = useState("");
    const [apikey, setApikey] = useState("");
    const [data, setData] = useState("");

    const yourApiKey = (e) => {
        setApikey(e.target.value)
    }

    const titleSearch = (e) => {
        setSearch(e.target.value)
    }

    const request = (e) => {
        axios.get("http://www.omdbapi.com/?apikey=88da2869&t=" +search)
            .then(response=>{
                console.log(response.data);
                setData(response.data);
            })

            
    }

   

    console.log(data.Title);

    

    return(
        <>
            <h2>Film Search!</h2>
            <input placeholder="api key here" type="text" onChange={(e) =>yourApiKey(e)}></input><br></br>
            <input placeholder="film search" type="text" onChange={(e) =>titleSearch(e)}></input><br></br>
            <button onClick={(e)=>request(e)}>Submit</button>


            <div>
                <img src={data.Poster}></img>
            <p>Title: {data.Title}</p>
            <p>Released: {data.Released}</p>
            <p>Director: {data.Director}</p>
            ?
            </div>

            
        </>
    )

}

export default FilmRequest;
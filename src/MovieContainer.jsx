import Movie from './Movie';

const MovieContainer = (props) => {
    const movies = props.movies.map((movie) => <Movie title={movie.Title} year={movie.Year} image={movie.Poster}/>);

    return(
        <>
            {movies}
        </>
    )
}

export default MovieContainer;
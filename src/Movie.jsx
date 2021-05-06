const Movie = ({ image, title, year}) => {
    return(
        <div>
            <img src={image}></img>
            <h2>{title}</h2>
            <p>Year: {year}</p>
        </div>
    );
}

export default Movie;
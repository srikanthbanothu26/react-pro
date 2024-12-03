function MovieDisplay({ movieData, error }) {
    return (
      <div>
        {error && <p className="text-red-500 mt-4">{error}</p>}
        {movieData && (
          <div className="mt-4">
            <h2 className="text-lg font-bold">{movieData.Title}</h2>
            <p>Year: {movieData.Year}</p>
            <p>Genre: {movieData.Genre}</p>
            <p>Director: {movieData.Director}</p>
            <p>Plot: {movieData.Plot}</p>
            <img src={movieData.Poster} alt={movieData.Title} className="mt-2" />
          </div>
        )}
      </div>
    );
  }
  
  export default MovieDisplay;
  
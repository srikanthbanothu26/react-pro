import { useState } from 'react';
import MovieDisplay from './movie';
import './output.css';

function App() {
  const [movieName, setMovieName] = useState('');
  const [movieData, setMovieData] = useState(null);
  const [error, setError] = useState('');

  const apiKey = "28f9e296";
  
  const fetchMovieData = async () => {
    if (!movieName) {
      setError('Please enter a movie name.');
      return;
    }

    try {
      setError('');
      const response = await fetch(`http://www.omdbapi.com/?t=${movieName}&apikey=${apiKey}`);
      const data = await response.json();
      if (data.Response === "True") {
        setMovieData(data);
      } else {
        setError(data.Error || 'Movie not found.');
        setMovieData(null);
      }
    } catch (err) {
      setError('Failed to fetch movie data.');
    }
  };

  return (
    <div className="App">
      <h1 className="text-red-600">Movie Search</h1>
      <div>
        <input
          type="text"
          id="MovieName"
          placeholder="Enter movie name"
          className="border p-2"
          value={movieName}
          onChange={(e) => setMovieName(e.target.value)}
        />
        <button
          onClick={fetchMovieData}
          className="bg-blue-500 text-white p-2 ml-2"
        >
          Search
        </button>
      </div>
      <MovieDisplay movieData={movieData} error={error} />
    </div>
  );
}

export default App;

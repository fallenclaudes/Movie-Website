// src/components/Browse.js
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import Hero from "./Hero";

const Browse = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=d77fb5201130ee4c2dcee531ea15fbcd&language=en-US&page=1`
    );
    const data = await response.json();
    setMovies(data.results.slice(0, 20)); 
  };

  return (
    <>
      <Hero text="Browse Movies" />
      <div className="container">
        <div className="row">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Browse;

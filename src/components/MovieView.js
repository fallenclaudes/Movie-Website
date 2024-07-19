import { useEffect, useState } from "react";
import Hero from "./Hero";
import { useParams } from "react-router-dom";
import noPosterImage from './no poster.jpg';

const MovieView = () => {
  const { id } = useParams();

  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=d77fb5201130ee4c2dcee531ea15fbcd&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          setMovieDetails(data);
          setIsLoading(false);
        }, 200);
      });
  }, [id]);

  function renderDetails() {
    if (isLoading) {
      return <Hero text="Loading..." />;
    }
    if (movieDetails) {
      const posterPath = movieDetails.poster_path
        ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
        : noPosterImage;
      const genres = movieDetails.genres
        ? movieDetails.genres.map((genre) => genre.name).join(", ")
        : "N/A";
        console.log("Poster Path:", posterPath);

      return (
        <>
          <Hero text={movieDetails.original_title} />

          <div className="container my-5">
            <div className="row justify-content-center">
              <div className="col-md-3">
                <img
                  src={posterPath}
                  alt={movieDetails.original_title || "No Poster Available"}
                  className="img-fluid shadow rounded"
                  onError={(e) => { e.target.onerror = null; e.target.src = noPosterImage; }} 
                />
              </div>
              <div className="col-sm-6">
                <h3 className="text-center">{movieDetails.original_title}</h3>
                <p className="lead">{movieDetails.overview}</p>
                <p>
                  <b>Release Date:</b> {movieDetails.release_date}
                </p>
                <p>
                  <b>Status:</b> {movieDetails.status}
                </p>
                <p>
                  <b>Genre:</b> {genres}
                </p>
                <p>
                  <b>Rating:</b> {movieDetails.vote_average}
                </p>
                <button className="btn btn-danger">Watch now</button>
              </div>
            </div>
          </div>
        </>
      );
    }
  }

  return renderDetails();
};

export default MovieView;

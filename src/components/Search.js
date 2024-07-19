import Hero from './Hero';
import { Link } from 'react-router-dom';
import noPosterImage from './no poster.jpg';

const MovieCard = ({ movie }) => {
  const posterUrl = movie.poster_path 
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` 
    : noPosterImage;

  const detailUrl = `/movies/${movie.id}`;

  return (
    <div className="col-lg-2 col-md-3 col-2">
      <div className="card">
        <img src={posterUrl} className="card-img-top" alt={movie.original_title} />
        <div className="card-body">
          <h5 className="card-title">{movie.original_title}</h5>
          <Link to={detailUrl} className="btn btn-primary">More Details</Link>
        </div>
      </div>
    </div>
  );
};

const Search = ({ keyword, searchResults }) => {
  const title = `You searched for ${keyword}`;

  const resultHTML = searchResults.map((obj, i) => (
    <MovieCard movie={obj} key={i} />
  ));

  return (
    <>
      <Hero text={title} />
      <div className="container">
        {resultHTML.length > 0 ? (
          <div className="row">
            {resultHTML}
          </div>
        ) : (
          <div className="row">
            <div className="col-12">
              <p className="text-center mt-5">No results found. Please try a different keyword.</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Search;

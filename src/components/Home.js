// src/components/Home.js
import Hero from "./Hero";
import { Link } from "react-router-dom";
import 'boxicons';

const Home = () => {
  return (
    <>
      <Hero text="Unlimited movies, TV shows and more" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead" style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
              <b>Watch Me Now:</b> Your Gateway to the Best in Cinema Welcome to
              Watch Me Now, where the magic of movies comes alive. Our platform
              is designed to bring you closer to the world of cinema, whether
              you’re a die-hard film enthusiast or just looking for a relaxing
              movie night. From the latest blockbusters to timeless classics, we
              have something for everyone. <br></br>
              <b>Discover, Explore, and Enjoy: </b>At
              Watch Me Now, we believe that every movie has a story waiting to
              be discovered. Our extensive collection includes a diverse range
              of genres, ensuring that there’s always something new to explore.
              Use our search feature to find your favorite films, read detailed
              synopses, and enjoy high-quality posters that give you a sneak
              peek into the cinematic experience awaiting you. <br></br>
               <b>Browse Movies Effortlessly:</b> To get you started,
              we’ve handpicked a selection of popular movies that you can browse
              right from our homepage. These films represent some of the best in
              contemporary cinema, offering a mix of critically acclaimed
              masterpieces and audience favorites. Each movie card provides a
              quick overview and a link to more detailed information, making it
              easy for you to decide what to watch next.<br></br>
               <b>Join Our Community:</b>
              Watch Me Now is more than just a movie database; it’s a community
              of movie lovers. Share your reviews, rate movies, and join
              discussions with fellow cinephiles. Whether you’re here to catch
              up on the latest releases or to rediscover old favorites, our
              platform is designed to enhance your movie-watching experience.
              <br></br>
              <b>Start Your Journey:</b> Hit the “Browse Movies” button to dive into
              our collection and start your cinematic journey. We’re excited to
              have you here and can’t wait to help you discover your next
              favorite film.
            </p>
            <div className="text-center">
              <Link to="/browse" className="btn btn-danger btn-lg w-75 d-inline-flex align-items-center justify-content-center">
              <span className="me-2">Browse Movies</span>
              <box-icon name='right-arrow-circle' type='solid' className="icon"></box-icon>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

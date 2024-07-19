import "./App.css";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Search from "./components/Search";
import Footer from "./components/Footer";
import MovieView from "./components/MovieView";
import Browse from "./components/Browse";
import NotFound from "./components/NotFound";
import { Routes, Route } from "react-router-dom";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (searchText) {
      console.log(searchText, "is the search text");
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=d77fb5201130ee4c2dcee531ea15fbcd&query=${searchText}&include_adult=false&language=en-US&page=1`)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setSearchResults(data.results);
        });
    }
  }, [searchText]);

  return (
    <div className="app-container">
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/search"
            element={
              <Search keyword={searchText} searchResults={searchResults} />
            }
          />
          <Route path="/movies/:id" element={<MovieView />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

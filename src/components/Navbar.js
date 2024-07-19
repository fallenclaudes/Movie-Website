// Navbar.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'boxicons';

const Navbar = ({ searchText, setSearchText }) => {
  const navigate = useNavigate();

  const [searchInput, setSearchInput] = useState("");

  const handleSearch = () => {
    setSearchText(searchInput);
    navigate('/search');
  };

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <nav className="navbar navbar-expand-lg text-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"><box-icon name='movie-play' type='solid' ></box-icon>Watch Me Now</Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-danger" aria-disabled="true">Coming Soon</Link>
            </li>
          </ul>
          <form className="d-flex" onSubmit={(e) => { e.preventDefault(); handleSearch(); }}>
            <input 
              className="form-control me-2" 
              type="search" 
              placeholder="Search" 
              aria-label="Search" 
              value={searchInput} 
              onChange={handleInputChange}
            />
            <button className="btn btn-danger" type="submit">
              <box-icon name='search-alt-2'></box-icon>
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

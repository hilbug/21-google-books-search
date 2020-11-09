import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">Google Books</Link>
      <Link to="/" className="nav-link">Search</Link>
      <Link to="/savedbooks" className="nav-link">Saved</Link>
    </nav>
);

export default Nav;


// Nav brand: Google Books
// Links: Search Saved
// Note: Nav and Navbar from react-bootstrap crashes the browser
// Nav from week 21 activity 05
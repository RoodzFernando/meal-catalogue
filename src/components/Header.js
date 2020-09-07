import React from 'react';
import {
  NavLink, BrowserRouter as Router, Route,
} from 'react-router-dom';
import Search from './Search';
import logo from '../images/cocktail.svg';
import RandomImage from '../containers/RandomImage';

function Header() {
  return (
    <header>
      <div className="header-top">
        <Search />
      </div>

      <div className="logo">
        <img src={logo} alt="" />
        <h2>Meal Catalogue</h2>
      </div>
      <div className="header-bottom">
        <div className="categories">
          <Router>
            <Route path="/">
              <a href="/">Home</a>
            </Route>
          </Router>
        </div>
        <RandomImage />
      </div>
    </header>
  );
}

export default Header;

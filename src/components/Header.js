import React from 'react';
import {
  NavLink, BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import Search from './Search';
import logo from '../images/cocktail.svg';
import CategoryForm from '../containers/CategoryForm';
import Area from '../containers/Area';
import RandomImage from '../containers/RandomImage';
// import Home from './Home'
import MealLists from '../containers/MealLists';
import MealPage from '../containers/MealPage';

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
            <NavLink to="/">Home</NavLink>
            <Switch>
              <Route path="/" component={MealLists}/>
            </Switch>
          </Router>
          {/* <Route path="/"  /> */}
          {/* <CategoryForm /> */}
          {/* <Area /> */}
        </div>
        <RandomImage />
      </div>
    </header>
  );
}

export default Header;

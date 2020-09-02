import React from 'react'
import Search from './Search'
import logo from '../images/cocktail.svg'
import CategoryForm from '../containers/CategoryForm'
import Area from '../containers/Area'
import RandomImage from '../containers/RandomImage'
// import Home from './Home'
// import { Link, BrowserRouter as Router, Route } from 'react-router-dom'
function Header() {
    return (
        <header>
            <div className="header-top">
                <Search />
            </div>

            <div className="logo">
                <img src={logo} alt=""/>
                <h2>Meal Catalogue</h2>
            </div>
            <div className="header-bottom">
              <div className="categories">
              {/* <Router>
                <Link to="/">
                  <li>Home</li>
                </Link>
                <Route path="/" exact component={Home} />
              </Router> */}
                <CategoryForm />
                <Area />
              </div>
              <RandomImage />
            </div>
        </header>
    )
}

export default Header

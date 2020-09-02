import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MealPage from '../containers/MealPage';
import ShowMeal from './ShowMeal';
import Header from './Header';
import Footer from './Footer';

function Home({ test }) {
  return (
    <div className="app-root">
      <Header />
      <div className="app-body">
        <div>
          <Router>
            <Switch>
              <Route path="/" exact component={MealPage} />
              <Route path="/meals/:id" exact component={ShowMeal} />
            </Switch>
          </Router>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;

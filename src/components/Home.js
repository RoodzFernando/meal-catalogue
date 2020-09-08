import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ShowMeal from './ShowMeal';
import MealLists from '../containers/MealLists';
import Header from './Header';
import Footer from './Footer';

function Home() {
  return (
    <div data-testid="app-root" className="app-root">
      <Header />
      <div className="app-body">
        <div>
          <Router>
            <Switch>
              <Route path="/" exact component={MealLists} />
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

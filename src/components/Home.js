import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MealPage from '../containers/MealPage';
import ShowMeal from './ShowMeal';
import Header from './Header';
import Desserts from '../containers/Desserts';

function Home({test}) {
    return (
        <div className="app-body">
            <Header />
        <Router>
            <Switch>
                <Route path="/" exact component={MealPage}/>
                <Route path="/meals/:id" exact component={ShowMeal}/>
            </Switch>
        </Router>
        <Desserts />
        </div>
    )
}

export default Home

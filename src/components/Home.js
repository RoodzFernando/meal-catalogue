import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DrinkPage from '../containers/DrinkPage';
import ShowDrink from './ShowDrink';
import Header from './Header';

function Home() {
    return (
        <div className="app-body">
            <Header />
        <Router>
            <Switch>
                <Route path="/" exact component={DrinkPage}/>
                <Route path="/meals/:id" exact component={ShowDrink}/>
            </Switch>
        </Router>
        </div>
    )
}

export default Home

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DrinkPage from '../containers/DrinkPage';
import ShowDrink from './ShowDrink';

function Home() {
    return (
        <div>

        <h1>Home is coming</h1>
        <Router>
            <Switch>
                <Route path="/" exact component={DrinkPage}/>
                <Route path="/drinks/:id" exact component={ShowDrink}/>
            </Switch>
        </Router>
        </div>
    )
}

export default Home

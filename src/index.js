import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Home from './components/Home';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import beverageReducer from './reducers';
import DrinkPage from './containers/DrinkPage';
import { Router, Switch, Route } from 'react-router-dom';

const store = createStore(beverageReducer);

console.log("===============")
console.log(store.getState())
console.log("===============")

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

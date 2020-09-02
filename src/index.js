import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Home from './components/Home';
import { Provider } from 'react-redux';
import './styles/Header.scss'
import './styles/RandomImage.scss'
import './styles/CategoryForm.scss'
import './styles/MealPage.scss'
import './styles/Dessert.scss'
import './styles/Home.scss'
import './styles/NewsLetter.scss'
import './styles/TopCategory.scss'
import './styles/Footer.scss'
import { store } from './helpers/store'

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

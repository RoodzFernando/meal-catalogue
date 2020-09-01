import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

const fetchData = (url, dispatchedAction) => {
  return function(dispatch) {
    fetch(url)
    .then(response => response.json())
    .then(data => {
      const someData = data;
      console.log(someData)
      dispatch(dispatchedAction(someData.meals))
    }
     )
  }
}

const store = createStore(rootReducer, applyMiddleware(thunk));
export {
  store,
  fetchData  
} 
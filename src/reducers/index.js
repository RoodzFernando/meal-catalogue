import { combineReducers } from 'redux';
import mealsReducer from './mealsReducer';
import changeCategoryReducer from './filter';

const rootReducer = combineReducers({
  mealReducer: mealsReducer,
  filter: changeCategoryReducer,
});

export default rootReducer;

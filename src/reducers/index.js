import mealReducer from './mealReducer';
import randMealReducer from './randMealReducer'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  mealRed: mealReducer,
  randRed: randMealReducer
})

export default rootReducer
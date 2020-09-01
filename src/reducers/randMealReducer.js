import { RAND_MEAL } from '../actions/index';
import initialState from '../helpers/shared';

const randMealReducer = (state = initialState, action) => {
  switch(action.type) {
    case RAND_MEAL:
      return {
        randMeal: [...state.randMeal, action.meal]
      }
    default:
      return state
  }
}

export default randMealReducer
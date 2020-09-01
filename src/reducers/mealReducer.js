import { CHECK_MEAL } from '../actions/index';
import initialState from '../helpers/shared';

const MealReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_MEAL:
      return {
        meal: [...state.meal, ...action.meal]
      }
      default:
        return state
  }
}

export default MealReducer;
import initialState from '../helpers/shared';
import * as actionType from '../actions/index';

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.RANDOM_MEAL:
      return {
        ...state,
        randomMeal: [...state.randomMeal, ...action.payload],
      };
    case actionType.LIST_MEAL:
      return {
        ...state,
        listOfMeals: [...state.listOfMeals, ...action.payload],
      };
    case actionType.LIST_CATEGORIES:
      return {
        ...state,
        listOfCategories: [...state.listOfCategories, ...action.payload],
      };
    case actionType.LIST_COUNTRIES:
      return {
        ...state,
        listOfCountries: [...state.listOfCountries, ...action.payload],
      };
    case actionType.LIST_DESSERT:
      return {
        ...state,
        listOfDessert: [...state.listOfDessert, ...action.payload],
      };
    default:
      return state;
  }
};

export default rootReducer;

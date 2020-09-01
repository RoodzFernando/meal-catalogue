import * as actions from './index';

const randomMealAction = meal => {
  return {
    type: actions.RANDOM_MEAL,
    payload: meal,
  }
}

const listOfMealsAction = meal => {
  return {
    type: actions.LIST_MEAL,
    payload: meal
  }
}

const listOfCategoriesAction = category  => {
  return {
    type: actions.LIST_CATEGORIES,
    payload: category
  }
}

const listOfCountriesAction = country => {
  return {
    type: actions.LIST_COUNTRIES,
    payload: country
  }
}
const listOfDessertsAction = dessert => {
  return {
    type: actions.LIST_DESSERT,
    payload: dessert
  }
}

export {
  randomMealAction,
  listOfMealsAction,
  listOfCategoriesAction,
  listOfCountriesAction,
  listOfDessertsAction,
}
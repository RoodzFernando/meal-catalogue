import * as actions from './index';

const randomMealAction = meal => ({
  type: actions.RANDOM_MEAL,
  payload: meal,
});

const listOfMealsAction = meal => ({
  type: actions.LIST_MEAL,
  payload: meal,
});

const listOfCategoriesAction = category => ({
  type: actions.LIST_CATEGORIES,
  payload: category,
});

const listOfCountriesAction = country => ({
  type: actions.LIST_COUNTRIES,
  payload: country,
});
const listOfDessertsAction = dessert => ({
  type: actions.LIST_DESSERT,
  payload: dessert,
});

const changeCategoryAction = category => ({
  type: actions.CHANGE_CATEGORY,
  payload: category,
});

export {
  randomMealAction,
  listOfMealsAction,
  listOfCategoriesAction,
  listOfCountriesAction,
  listOfDessertsAction,
  changeCategoryAction,
};

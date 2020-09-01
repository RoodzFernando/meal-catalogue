const CHECK_MEAL = 'CHECK_MEAL';
const RAND_MEAL = 'RAND_MEAL';

const mealAction = meal => {
    return {
        type: CHECK_MEAL,
        meal
    }
}

const randMealAction = meal => {
  return {
    type: RAND_MEAL,
    meal
  }
}

export {
    CHECK_MEAL,
    RAND_MEAL,
    mealAction,
    randMealAction
}
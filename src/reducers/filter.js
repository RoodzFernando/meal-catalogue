import { CHANGE_CATEGORY } from '../actions/index';

const changeCategoryReducer = (state = 'Categories', action) => {
  switch (action.type) {
    case CHANGE_CATEGORY:
      return action.payload;
    default:
      return state;
  }
};

export default changeCategoryReducer;

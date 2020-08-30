import { CHECK_BEVERAGE } from '../actions/index';

const initialState = {
    drinks: []
}
const beverageReducer = (state = initialState, action) => {
    switch(action.type) {
        case CHECK_BEVERAGE:
            return {
                drinks: [...state.drinks,action.drinks]
            }
        default:
            return state
    }
}

export default beverageReducer;
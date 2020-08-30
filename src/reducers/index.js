import { CHECK_BEVERAGE } from '../actions/index';

const initialState = {
    state: ''
}
const beverageReducer = (state = initialState, action) => {
    switch(action.type) {
        case CHECK_BEVERAGE:
            return {
                ...state,
            }
        default:
            return state
    }
}

export default beverageReducer;
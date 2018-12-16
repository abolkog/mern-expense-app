import { EXPENSE_SAVED } from '../actions/types';

const INITIAL_STATE = {
    saved: false
};
 
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EXPENSE_SAVED:
            return {...state, saved: true }
        default:
            return state
    }
}
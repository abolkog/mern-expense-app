import { combineReducers } from 'redux';

import auth from './auth_reducer';
import expense from './expense_reducer';

export default combineReducers({
    auth,
    expense
});
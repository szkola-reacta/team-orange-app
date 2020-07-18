import { combineReducers } from 'redux';

import statusReducer from './Reducers/statusReducer';

var reducers = combineReducers({
    statusState: statusReducer,
});

export default reducers;
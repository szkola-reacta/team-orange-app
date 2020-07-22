import { combineReducers } from 'redux';

import statusReducer from './Reducers/statusReducer';
import deptReducer from './Reducers/deptReducer';

var reducers = combineReducers({
    statusState: statusReducer,
    deptState: deptReducer
});

export default reducers;
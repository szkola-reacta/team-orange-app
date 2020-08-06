import { combineReducers } from 'redux';

import statusReducer from './Reducers/statusReducer';
import deptReducer from './Reducers/deptReducer';
import manufReducer from './Reducers/manufReducer';
import ownerReducer from './Reducers/ownerReducer';


var reducers = combineReducers({
    statusState: statusReducer,
    deptState: deptReducer,
    manufState: manufReducer,
    ownerState: ownerReducer,
});

export default reducers;
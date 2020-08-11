import { combineReducers } from 'redux';

import statusReducer from './Reducers/statusReducer';
import deptReducer from './Reducers/deptReducer';
import manufReducer from './Reducers/manufReducer';
import ownerReducer from './Reducers/ownerReducer';
import inventoriedReducer from './Reducers/inventoriedReducer';


var reducers = combineReducers({
    statusState: statusReducer,
    deptState: deptReducer,
    manufState: manufReducer,
    ownerState: ownerReducer,
    inventoriedState: inventoriedReducer,
});

export default reducers;
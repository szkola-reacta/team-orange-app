import { combineReducers } from 'redux';

import statusReducer from './Reducers/statusReducer';
import deptReducer from './Reducers/deptReducer';
import manufReducer from './Reducers/manufReducer';
import ownerReducer from './Reducers/ownerReducer';
import inventoriedReducer from './Reducers/inventoriedReducer';
import AssetNrReducer from './Reducers/assetReducer';
import eqNrReducer from './Reducers/eqReducer'
import snReducer from './Reducers/snReducer';
import descriptionReducer from './Reducers/descriptionReducer'


var reducers = combineReducers({
    assetState: AssetNrReducer,
    eqState: eqNrReducer,
    snState: snReducer,
    descriptionState: descriptionReducer,
    statusState: statusReducer,
    deptState: deptReducer,
    manufState: manufReducer,
    ownerState: ownerReducer,
    inventoriedState: inventoriedReducer,
});

export default reducers;
import * as types from '../Actions/Action-types';


const initialInventoried = {
    inventoried: '',
};

export const inventoriedReducer = (invDate = initialInventoried, action) => {
    switch (action.type) {

        case types.SET_INVENTORIED:
            return Object.assign({}, invDate, { inventoried: action.inventoried });

        default:
            break;
    }

    return invDate;
};

export default inventoriedReducer;
import * as types from '../Actions/Action-types';


const initialOwnerState = {
    owner: '',
};

export const ownerReducer = (owners = initialOwnerState, action) => {
    switch (action.type) {

        case types.SET_OWNER:
            return Object.assign({}, owners, { owner: action.owner });

        default:
            break;
    }

    return owners;
};

export default ownerReducer;
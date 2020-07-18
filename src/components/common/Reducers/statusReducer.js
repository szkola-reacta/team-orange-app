import * as types from '../Actions/Action-types';

const initialStatus = {
    status: ''
};

export const statusReducer = (status = initialStatus, action) => {
    switch (action.type) {

        case types.SET_STATUS:
            return Object.assign({}, status, { status: action.status });

        default:
            break;
    }

    return status;
};

export default statusReducer;
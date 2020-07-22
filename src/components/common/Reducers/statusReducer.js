import * as types from '../Actions/Action-types';
import { isObjectType } from 'graphql';

const initialStatusState = {
    status: '',
    statusId: ''
};

export const statusReducer = (statuses = initialStatusState, action) => {
    switch (action.type) {

        case types.SET_STATUS:
            return Object.assign({}, statuses, { status: action.status });

        case types.SET_STATUS_ID:
            return Object.assign({}, statuses, { statusId: action.statusId });

        default:
            break;
    }

    return statuses;
};

export default statusReducer;
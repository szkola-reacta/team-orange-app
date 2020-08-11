import * as types from '../Actions/Action-types';


const initialSerialNumber = {
    serialNumber: '',
};

export const snReducer = (newSerialNumber = initialSerialNumber, action) => {
    switch (action.type) {

        case types.SET_SERIAL_NR:
            return Object.assign({}, newSerialNumber, { serialNumber: action.serialNumber });

        default:
            break;
    }

    return newSerialNumber;
};

export default snReducer;
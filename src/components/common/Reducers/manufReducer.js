import * as types from '../Actions/Action-types';


const initialManufState = {
    manuf: '',
    manufId: '',
};

export const manufReducer = (manufs = initialManufState, action) => {
    switch (action.type) {

        case types.SET_MANUF:
            return Object.assign({}, manufs, { manuf: action.manuf });

        case types.SET_MANUF_ID:
            return Object.assign({}, manufs, { manufId: action.manufId });

        default:
            break;
    }

    return manufs;
};

export default manufReducer;
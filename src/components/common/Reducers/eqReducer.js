import * as types from '../Actions/Action-types';


const initialEqNr = {
    eqNr: '',
};

export const EqNrReducer = (newEqNr = initialEqNr, action) => {
    switch (action.type) {

        case types.SET_EQ_NR:
            return Object.assign({}, newEqNr, { eqNr: action.eqNr });

        default:
            break;
    }

    return newEqNr;
};

export default EqNrReducer;
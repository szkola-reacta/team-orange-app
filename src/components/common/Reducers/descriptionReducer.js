import * as types from '../Actions/Action-types';


const initialDescription = {
    description: '',
};

export const descriptionReducer = (newDescription = initialDescription, action) => {
    switch (action.type) {

        case types.SET_DESCRIPTION:
            return Object.assign({}, newDescription, { description: action.description });

        default:
            break;
    }

    return newDescription;
};

export default descriptionReducer;
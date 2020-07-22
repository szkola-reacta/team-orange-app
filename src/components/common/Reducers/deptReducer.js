import * as types from '../Actions/Action-types';


const initialDeptState = {
    deptName: '',
    deptId: '',
};

export const deptReducer = (depts = initialDeptState, action) => {
    switch (action.type) {

        case types.SET_DEPT_NAME:
            return Object.assign({}, depts, { deptName: action.deptName });

        case types.SET_DEPT_ID:
            return Object.assign({}, depts, { deptId: action.deptId });

        default:
            break;
    }

    return depts;
};

export default deptReducer;
import * as types from './Action-types'

export const setStatus = () =>({
    type: types.SET_STATUS,
    status: ''
});

export const setStatusId = () =>({
    type: types.SET_STATUS_ID,
    statusId: ''
});

export const setDeptName = () => ({
    type: types.SET_DEPT_NAME,
    deptName: ''
});

export const setDeptId = () => ({
    type: types.SET_DEPT_ID,
    deptId: ''
});

export const setManuf = () => ({
    type: types.SET_MANUF,
    manuf: ''
});

export const setManufId = () => ({
    type: types.SET_MANUF_ID,
    manufId: ''
});

export const setOwner = () => ({
    type: types.SET_OWNER,
    owner: ''
});
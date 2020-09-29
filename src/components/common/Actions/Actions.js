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

export const setInventoried = () => ({
    type: types.SET_INVENTORIED,
    inventoried: ''
});

export const setAssetNr = () => ({
    type: types.SET_ASSET_NR,
    assetNr: ''
})

export const setEqNr = () => ({
    type: types.SET_EQ_NR,
    eqNr: ''
})

export const setDescription = () => ({
    type: types.SET_DESCRIPTION,
    description: ''
})

export const setSerialNumber = () => ({
    type: types.SET_SERIAL_NR,
    serialNumber: ''
})
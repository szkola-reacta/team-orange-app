import * as types from './Action-types'

export const setStatus = () =>({
    type: types.SET_STATUS,
    status: ''
});

export const setStatusId = () =>({
    type: types.SET_STATUS_ID,
    statusId: ''
});
import * as types from '../Actions/Action-types';


const initialAssetNr = {
    assetNr: '',
};

export const AssetNrReducer = (newAssetNr = initialAssetNr, action) => {
    switch (action.type) {

        case types.SET_ASSET_NR:
            return Object.assign({}, newAssetNr, { assetNr: action.assetNr });

        default:
            break;
    }

    return newAssetNr;
};

export default AssetNrReducer;
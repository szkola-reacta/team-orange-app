import React from 'react';
import { AssetsQuery } from "../common/queries";
import { useQuery } from "urql";
import Assets from "./Assets"
import EditAsset from './EditAsset';


const QueryAssets = props => {

    const [result] = useQuery({
        query: AssetsQuery,
        variables: {id: props.id},
        requestPolicy: 'network-only'
    });
    console.log(props.id !== undefined)
    const {data, fetching, error} = result;
    const assetsList = {assets: data};

    if (fetching) return <p>Loading...</p>;
    if (error) return <p>{error.message}</p>;

    if (props.id !== undefined){
    return (
        <div>
            <EditAsset asset={assetsList.assets}/>
        </div>
    )
    }else{
        return (
            <div>
                <Assets assetsAll={assetsList.assets}/>
            </div>
        )
    }
};

export default QueryAssets;

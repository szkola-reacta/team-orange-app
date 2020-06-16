import React from 'react';
import { AssetsQuery } from "../common/queries";
import { useQuery } from "urql";
import Assets from "./Assets"


const QueryAssets = () => {

    const [result] = useQuery({
        query: AssetsQuery,
        requestPolicy: 'network-only'
    });
    const {data, fetching, error} = result;
    const assetsList = {assets: data};

    if (fetching) return <p>Loading...</p>;
    if (error) return <p>{error.message}</p>;

    return (
        <div>
            <Assets assetsAll={assetsList.assets}/>
        </div>
    )
};

export default QueryAssets;

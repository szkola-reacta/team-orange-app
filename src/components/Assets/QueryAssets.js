import React, { useState } from 'react';
import { AssetsQuery } from "../common/queries";
import { useQuery } from "urql";
import ListAssets from "./ListAssets";


const QueryAssets = () => {

    const [result, reexecuteQuery] = useQuery({
        query: AssetsQuery,
        requestPolicy: 'network-policy'
    });
    const {data, fetching, error} = result;

    const assetsList = {assets: data};

    if (fetching) return <p>Loading...</p>;
    if (error) return <p>{error.message}</p>;

    return (
        <div>
            <ListAssets assets={assetsList.assets}/>
        </div>
    )
};

export default QueryAssets;
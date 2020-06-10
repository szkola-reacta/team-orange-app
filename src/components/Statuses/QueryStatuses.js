import React from 'react';
import { StatusQuery } from "../common/queries";
import { useQuery } from "urql";
import Statuses from "./Statuses"


const QueryStatuses = () => {

    const [result, reexecuteQuery] = useQuery({
        query: StatusQuery,
        requestPolicy: 'network-only'
    });
    const {data, fetching, error} = result;
    const statusesList = {statuses: data};

    if (fetching) return <p>Loading...</p>;
    if (error) return <p>{error.message}</p>;

    return (
        <div>
            <Statuses statusesAll={statusesList.statuses}/>
        </div>
    )
};

export default QueryStatuses;

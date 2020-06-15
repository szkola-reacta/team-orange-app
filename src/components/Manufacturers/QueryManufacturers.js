import React from 'react';
import { ManufacturerQuery } from '../common/queries'
import { useQuery } from 'urql';
import Manufacturers from './Manufacturers';


const QueryManufacturers = ({ search, id }) => {

    const [result, reexecuteQuery] = useQuery({
        query: ManufacturerQuery,
        variables: { search, id },
        requestPolicy: 'network-only'
    });
    const {data, fetching, error} = result;
    const manufacturersList = {manufacturers: data};
    console.log(manufacturersList.manufacturers)

    if (fetching) return <p>Loading...</p>;
    if (error) return <p>{error.message}</p>;

    return (
        <div>
            <Manufacturers manufsAll={manufacturersList.manufacturers}/>
        </div>
    )
};

export default QueryManufacturers;

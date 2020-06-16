import React from 'react';
import { ManufacturerQuery } from '../common/queries'
import { useQuery } from 'urql';
import Manufacturers from './Manufacturers';


const QueryManufacturers = ({ search, id }) => {

    const [result] = useQuery({
        query: ManufacturerQuery,
        variables: { search, id },
        requestPolicy: 'network-only'
    });
    const {data, fetching, error} = result;
    const manufacturersList = {manufacturers: data};

    if (fetching) return <p>Loading...</p>;
    if (error) return <p>{error.message}</p>;

    return (
        <div>
            <Manufacturers manufsAll={manufacturersList.manufacturers}/>
        </div>
    )
};

export default QueryManufacturers;

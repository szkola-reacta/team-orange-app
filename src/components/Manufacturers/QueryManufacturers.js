import React from 'react';
import { ManufacturerQuery } from '../common/queries'
import { useQuery, reexecuteQuery } from 'urql';
import Manufacturers from './Manufacturers';
import { withRouter, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';


const QueryManufacturers = ({ search, id }) => {

    const [result, reexecuteQuery] = useQuery({
        query: ManufacturerQuery,
        variables: { search, id },
        requestPolicy: 'network-only',
    });

    const {data, fetching, error} = result;
    const manufacturersList = {manufacturers: data};

    if (fetching) return <p>Loading...</p>;
    if (error) return <p>{error.message}</p>;

    return (
        <div>
            <Link to={{pathname: `/CreateManufacturer/`}}>
                new one <FontAwesomeIcon icon={faPencilAlt} />
            </Link>
            <Manufacturers manufsAll={manufacturersList.manufacturers}/>
        </div>
    )
};

export default withRouter(QueryManufacturers);

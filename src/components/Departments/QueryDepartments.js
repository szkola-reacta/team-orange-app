import React from 'react';
import { DepartmentQuery } from '../common/queries';
import { useQuery } from 'urql';
import Departments from './Departments';
import { withRouter } from 'react-router-dom';


const QueryDepartments = ({ search, id}) => {

    const [result] = useQuery({
        query: DepartmentQuery,
        variables: { search, id },
        requestPolicy: 'network-only',
    });

    const {data, fetching, error} = result;
    const departmentsList = {departments: data};

    if (fetching) return <p>Loading...</p>;
    if (error) return <p>{error.message}</p>;

    return (
        <div>
            <Departments deptsAll={departmentsList.departments}/>
        </div>
    )
}

export default withRouter(QueryDepartments);

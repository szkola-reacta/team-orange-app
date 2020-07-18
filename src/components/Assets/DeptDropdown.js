import React from 'react';
import { useFormik } from 'formik';
import { DepartmentQuery } from '../common/queries';
import { useQuery } from 'urql';
import Dropdown from 'react-bootstrap/Dropdown';


const DeptDropdown = ({ search, id }) => {
    const [result] = useQuery({
        query: DepartmentQuery,
        variables: { search, id },
        requestPolicy: 'network-only',
    });

    const formik = useFormik({
        initialValues: {
            department: ''
        }
    })

    const {data, fetching, error} = result;
    const departmentList = { departments: data }

    if (fetching) return <p>Loading...</p>;
    if (error) return <p>{error.message}</p>;

    return (
        <div>
            <Dropdown>
                <Dropdown.Toggle variant="info" id="deptDropdown">
                    dział
                </Dropdown.Toggle>
                <Dropdown.Menu>
                {departmentList.departments.department.map(i =>
                    <Dropdown.Item
                        onChange={formik.handleChange}
                        defaultValue={formik.values.name}
                        key={i.id}>
                        {i.name}: {i.detailedName}
                    </Dropdown.Item>
                )}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default DeptDropdown;
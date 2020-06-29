import React, { useState } from 'react';
import { useMutation, useQuery } from 'urql';
import { DepartmentQuery } from '../common/queries';
import { EditDepartment as UpdateDepartment } from '../common/mutations';
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";
import Col from 'react-bootstrap/Col';
import { withRouter } from 'react-router-dom';
import history from '../common/history';
// import DeleteDepartment from './DeleteDepartment';


const EditDepartment = id => {

    const [updateDepartmentResult, updateDepartment] = useMutation(UpdateDepartment);

    const [result, reexecuteQuery] = useQuery({
        query: DepartmentQuery,
        variables: { id: id.location.id },
        requestPolicy: 'network-only'
    });

    const { data, fetching, error } = result;

    const initDepartment = { department: data };

    const [departmentState, setDepartmentState ] = useState([
        initDepartment
    ]);

    const keysArray = Object.keys(initDepartment);

    const valuesArray = Object.keys(initDepartment).map(function(k) {
        return String(initDepartment[k])
    })

    console.log(keysArray)

    if(fetching) return <p>Loading...</p>
    if(error) return <p>{error.message}</p>

    const handleDepartmentChange = (e) => {
        const updatedDepartment = departmentState;
        updatedDepartment[e.target.name] = e.target.value;
        setDepartmentState(updatedDepartment);
      };

      console.log(initDepartment.department.department[0].name)

      const submit = () => {
        const variables = {
            id: id.location.id,
            name: departmentState.name || initDepartment.department.department[0].name,
            detailedName: departmentState.detailedName || initDepartment.department.department[0].detailedName
        }
        updateDepartment(variables).then(result => {
            id.history.push('/QueryDepartments')
            if(result.error) {
                console.log(result.error)
            }
          });
    };

    return (
        <Form>
        {data.department.map(department => (
        <Form.Row className="align-item-center" key={department.id}>
            <Col xs="auto">
                <Form.Label htmlFor="name">
                    Name
                </Form.Label>
            </Col>
            <Col xs="auto">
                    <Form.Control
                        type="text"
                        name="name"
                        id="nameId"
                        className="name"
                        onChange={handleDepartmentChange}
                        defaultValue={department.name}
                    />
                </Col>
                <Col xs="auto">
                    <Form.Label htmlFor='detailed Name'>
                        detailed Name
                    </Form.Label>
                </Col>
                <Col xs="auto">
                    <Form.Control
                        type="text"
                        name="detailedName"
                        id="detailedNameId"
                        className="detailedName"
                        onChange={handleDepartmentChange}
                        defaultValue={department.detailedName}
                     />
                </Col>
                <Col xs="auto">
                    <Button variant="primary" onClick={() => submit()}>Zapisz</Button>
                </Col>
        </Form.Row>
        ))}
        </Form>
    )
}

export default withRouter(EditDepartment);
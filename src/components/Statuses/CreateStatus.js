import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useMutation, useQuery } from 'urql';
import { StatusQuery } from '../common/queries';
import { CreateStatus as NewStatus } from '../common/mutations';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';


const CreateStatus = () => {

    const blankStatus = { status: '' };
    const [statusState, setStatusState ] = useState([
       {...blankStatus},
    ]);

    const [createStatusResult, newStatus] = useMutation(NewStatus);

    const handleStatusChange = (e) => {
      const updatedStatus = [...statusState];
      updatedStatus[e.target.name] = e.target.value;
      setStatusState(updatedStatus);
    };

    const submit = () => {
        const variables = { status: statusState.status };
        newStatus(variables).then(result => {
            if(result.error) {
                console.error(result.error);

            }
            console.log(createStatusResult);
        });
        console.log("ok");
    };

    return (
        <div>
            <Form.Row className="align-items-center">
                <Col xs="auto">
                    <Form.Label htmlFor="statusId">
                        Status
                    </Form.Label>
                </Col>
                <Col xs="auto">
                    <Form.Control
                        type="text"
                        name="status"
                        id="statusId"
                        className="status"
                        defaultValue={statusState.value}
                        onChange={handleStatusChange}
                    />
                </Col>
                <Col xs="auto">
                    <Button variant="primary" onClick={() => submit()}>Zapisz</Button>
                </Col>
            </Form.Row>
        </div>
    )
};

CreateStatus.propTypes = {
    statusState: PropTypes.string
}

export default CreateStatus;
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useMutation } from 'urql';
import { CreateStatus as NewStatus } from '../common/mutations';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom';


const CreateStatus = (sth) => {

    console.log(sth.location)

    const blankStatus = { status: ''};
    const [redirect, RedirectToList] = useState('false');

    const [statusState, setStatusState ] = useState([
       {...blankStatus},
    ]);

    const [createStatusResult, newStatus] = useMutation(NewStatus);

    const handleStatusChange = (e) => {
      const updatedStatus = [...statusState];
      updatedStatus[e.target.name] = e.target.value;
      setStatusState(updatedStatus);
    };

    function handleRedirection() {
        RedirectToList('true')
        console.log(redirect)
    }

    const submit = () => {
        const variables = { status: statusState.status };
        newStatus(variables).then(result => {
            if(result.error) {
                console.error(result.error);

            }
        });
        console.log("ok");
        handleRedirection();
    };

    return (
        <div>
            {redirect === 'false' ?
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
                <Col xs="auto">
                    <Link to='/QueryStatuses'>cancel</Link>
                </Col>
            </Form.Row>
                :
             <Redirect to='/QueryStatuses'/>
             }
        </div>
    )
};

CreateStatus.propTypes = {
    statusState: PropTypes.string
}

export default CreateStatus;
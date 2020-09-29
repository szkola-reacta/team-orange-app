import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useMutation, useQuery } from 'urql';
import { StatusQuery } from '../common/queries';
import { EditStatus as UpdateStatus } from '../common/mutations';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { withRouter } from 'react-router-dom';
import DeleteStatus from './DeleteStatus';


const EditStatus = id => {

    const [updateStatusResult, updateStatus] = useMutation(UpdateStatus);

    const [result] = useQuery({
       query: StatusQuery,
       variables: {id: id.location.id },
        requestPolicy: 'network-only'
    });

    const { data, fetching, error } = result;

    const initStatus = { status: data };

    const [statusState, setStatusState ] = useState([
        initStatus
    ]);

    if(fetching) return <p>Loading...</p>;
    if(error) return <p>{error.message}</p>;

    const handleStatusChange = (e) => {
      const updatedStatus = statusState;
      updatedStatus[e.target.name] = e.target.value;
      setStatusState(updatedStatus);
    };

    const submit = () => {
        const variables = {
             id: id.location.id,
             status: statusState.status || initStatus.status.status[0].status
        };
        updateStatus(variables).then(result => {
            id.history.push('/QueryStatuses')
            if(result.error) {
                console.log(result.error)
            }
        });
      };

        return (
            <Form>
            <p>edit form</p>
                <Form.Label sm="2">
                    Status
                </Form.Label>
                {data.status.map(status => (
                <Form.Control
                    key={status.id}
                    type="text"
                    name="status"
                    id="status_id"
                    className="status"
                    defaultValue={status.status}
                    onChange={handleStatusChange}
                />
                    ))}
                <Button variant="primary" onClick={() => submit()}>Zapisz</Button>
                <DeleteStatus id={id.location.id}/>
            </Form>
        )
}

EditStatus.propTypes = {
    statusState: PropTypes.string
}

export default withRouter(EditStatus);

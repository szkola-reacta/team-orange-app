import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useMutation, useQuery } from 'urql';
import { StatusQuery } from '../common/queries';
import { EditStatus as UpdateStatus } from '../common/mutations';
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";
import DeleteStatus from './DeleteStatus';


const EditStatus = (id) => {

    const [updateStatusResult, updateStatus] = useMutation(UpdateStatus);

    const [result, reexecuteQuery] = useQuery({
       query: StatusQuery,
       variables: id,
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
          const variables = { id: id.id, status: statusState.status || initStatus };
          updateStatus(variables).then(result => {
              if(result.error) {
                  console.log(result.error)
              }
              console.log('updateStatusResult', updateStatusResult);
              });
            // reexecuteQuery({
            //     query: StatusQuery,
            //     requestPolicy: 'network-only'
            // })
            console.log(id)
      };
        return (
            <div>
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
                    <DeleteStatus id={id.id}/>
                    </Form>
            </div>
        )
}

EditStatus.propTypes = {
    statusState: PropTypes.string
}

export default EditStatus;

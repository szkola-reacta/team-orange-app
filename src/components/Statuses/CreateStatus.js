import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import { useMutation, useQuery } from 'urql';
import { StatusQuery } from '../common/queries';
import { CreateStatus as NewStatus } from '../common/mutations';


const CreateStatus = () => {

    const [reexecuteQuery] = useQuery({
        query: StatusQuery
    });

    const blankStatus = { status: '' };
    const [statusState, setStatusState ] = useState([
       {...blankStatus}
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
        // reexecuteQuery({ requestPolicy: 'network-only' })
    };

    return (
        <div>
            <form>
                <label htmlFor="status">Status</label>
                <input
                    type="text"
                    name="status"
                    id="statusId"
                    className="status"
                    value={statusState.value}
                    onChange={handleStatusChange}
                />
                <input onClick={() => submit()} type="button" value="Submit"/>
            </form>
        </div>
    )
};

CreateStatus.propTypes = {
    statusState: PropTypes.string
}

export default CreateStatus;
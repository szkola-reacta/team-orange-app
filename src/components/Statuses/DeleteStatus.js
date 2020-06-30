import React, { useCallback } from 'react';
import { useMutation } from 'urql';
import { DeleteStatus as DropStatus } from '../common/mutations';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { withRouter } from 'react-router-dom';


const DeleteStatus = props => {

    const [deleteStatusResult, deleteStatus] = useMutation(DropStatus);

    const submit = useCallback(() => {
        const variables = {id: props.id};
        deleteStatus(variables).then(result => {
            props.history.push('/QueryStatuses')
            if(result.error) {
                console.log(result.error)
            }
            console.log('deleteStatusResult', deleteStatusResult)
        })
    });
    return (
        <div>
            <Button variant="danger" onClick={() => submit()}>
                <FontAwesomeIcon icon={faTrashAlt}/>
                 Usuń
            </Button>
        </div>
    )
}

export default withRouter(DeleteStatus);

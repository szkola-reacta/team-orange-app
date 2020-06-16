import React from 'react';
import { useMutation } from 'urql';
import { DeleteStatus as DropStatus } from '../common/mutations';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'


const DeleteStatus = (id) => {
    console.log(id.id)

    const [deleteStatusResult, deleteStatus] = useMutation(DropStatus);

    const submit = () => {
        const variables = id;
        deleteStatus(variables).then(result => {
            if(result.error) {
                console.log(result.error)
            }
            console.log('deleteStatusResult', deleteStatusResult)
        })
    };
    return (
        <div>
            <Button variant="danger" onClick={() => submit()}>
                <FontAwesomeIcon icon={faTrashAlt}/>
                 Usuń
            </Button>
        </div>
    )
}

export default DeleteStatus;

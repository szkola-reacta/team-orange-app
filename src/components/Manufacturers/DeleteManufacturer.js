import React, { useCallback } from 'react';
import { useMutation } from 'urql';
import { DeleteManufacturer as DropManufacturer } from '../common/mutations';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { withRouter } from 'react-router-dom';


const DeleteManufacturer = props => {
    console.log('delete', props.id)

    const [deleteManufacturerResult, deleteManufacturer] = useMutation(DropManufacturer);

    const submit = useCallback(() => {
        const variables = {id: props.id};
        deleteManufacturer(variables).then(result => {
            props.history.push('/QueryManufacturers')
            if(result.error) {
                console.log(result.error)
            }
        });
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

export default withRouter(DeleteManufacturer);

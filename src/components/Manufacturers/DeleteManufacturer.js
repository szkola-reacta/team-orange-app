import React, { useState } from 'react';
import { useMutation } from 'urql';
import { DeleteManufacturer as DropManufacturer } from '../common/mutations';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'


const DeleteManufacturer = (id) => {
    console.log('delete', id)

    const [deleteManufacturerResult, deleteManufacturer] = useMutation(DropManufacturer);

    const submit = () => {
        const variables = id;
        deleteManufacturer(variables).then(result => {
            if(result.error) {
                console.log(result.error)
            }
            console.log('deleteManufacturerResult', deleteManufacturerResult)
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

export default DeleteManufacturer;

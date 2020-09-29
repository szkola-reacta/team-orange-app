import React, { useCallback } from 'react';
import { useMutation } from 'urql';
import { DeleteDepartment as DropDepartment } from '../common/mutations';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { withRouter } from 'react-router-dom';


const DeleteDepartment = props => {

    const [deleteDepartmentResult, deleteDepartment] = useMutation(DropDepartment);

    const submit = useCallback(() => {
        const variables = {id: props.id};
        deleteDepartment(variables).then(result => {
            props.history.push('/QueryDepartments')
            if(result.error) {
                console.log(result.error)
            }
            console.log('deleteDepartmentResult', deleteDepartmentResult)
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

export default withRouter(DeleteDepartment);
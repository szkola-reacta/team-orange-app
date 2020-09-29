import React, { useCallback } from 'react';
import { useMutation } from 'urql';
import { DeleteAsset as DropAsset } from '../common/mutations';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { withRouter } from 'react-router-dom';


const DeleteAsset = props => {

    const [deleteAssetResult, deleteAsset] = useMutation(DropAsset);

    const submit = useCallback(() => {
        const variables = {id: props.id};
        deleteAsset(variables).then(result => {
            props.history.push('/QueryAssets')
            if(result.error) {
                console.log(result.error)
            }
            console.log('deleteAssetResult', deleteAssetResult)
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

export default withRouter(DeleteAsset);
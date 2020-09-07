import React, { useCallback } from 'react';
import { EditAsset as UpdateAsset } from '../common/mutations';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import AssetForm from './AssetForm';
import { useMutation } from 'urql';


const EditAsset = props => {

    const initAsset = {

        assetId: props.assetId,
        assetNr: props.assetNr,
        eqNr: props.eqNr,
        serialNumber: props.serialNumber,
        manufacturer: props.manufacturerId,
        description: props.description,
        history: [{
            departmentId: props.departmentId,
            status: props.statusId,
            owner: props.owner,
            inventoried: props.inventoried
        }]
    }

    const [UpdateAssetResult, updateAsset] = useMutation(UpdateAsset);

    const submit = useCallback(() => {
        const variables = initAsset;
        updateAsset(variables).then(result => {
            props.history.push('/QueryAssets')
            if(result.error) {
                console.log(result.error)
            }
        });
        console.log(UpdateAssetResult)
    });

    return (
        <div>
            <AssetForm/>
            <Button variant="primary" onClick={() => submit()}>Zapisz</Button>
            <Link to='/QueryAssets'>cancel</Link>
        </div>
    )
}

const mapStateToProps = function(store) {
    return {
        assetNr: store.assetState.assetNr,
        eqNr: store.eqState.eqNr,
        serialNumber: store.snState.serialNumber,
        description: store.descriptionState.description,
        status: store.statusState.status,
        statusId: store.statusState.statusId,
        department: store.deptState.deptName,
        departmentId: store.deptState.deptId,
        manufacturer: store.manufState.manuf,
        manufacturerId: store.manufState.manufId,
        owner: store.ownerState.owner,
        inventoried: store.inventoriedState.inventoried
    }
};

export default connect(mapStateToProps)(EditAsset);
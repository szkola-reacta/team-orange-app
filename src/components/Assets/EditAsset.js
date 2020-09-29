import React, { useCallback, useState } from 'react';
import { AssetsQuery } from '../common/queries';
import { EditAsset as UpdateAsset } from '../common/mutations';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import AssetForm from './AssetForm';
import { useMutation, useQuery } from 'urql';


const EditAsset = props => {

    console.log(props.asset)

    const [redirect, RedirectToList] = useState('false')

    const [UpdateAssetResult, updateAsset] = useMutation(UpdateAsset);

    const submit = useCallback(() => {
        const variables = this.props.asset;
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
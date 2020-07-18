import React, { useState, useCallback, Component } from 'react';
import PropTypes from 'prop-types';
import { useMutation, useQuery } from 'urql';
import { CreateAsset as NewAsset } from '../common/mutations';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import HistoryForm from './HistoryForm';
import { withRouter } from 'react-router-dom';


class AssetForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            assetNr: '',
            description: '',
            eqNr: '',
            history: {
                department_id: '',
                status: '',
                owner: '',
                inventoried: ''
            },
            manufacturer: [],
            serialNumber: ''
        }
    }

    // const [updateAssetResult, updateAsset] = useMutation(NewAsset);

    // handleAssetCreation = (e) => {
    //     const updatedAsset = [...assetState];
    //     updatedAsset[e.target.name] = e.target.value;
    //     setAssetState(updatedAsset);
    //     console.log(e.target.name, e.target.value)
    // };

    // const submit = useCallback(() => {
    // const variables = {
    //     assetNr: assetState.assetNr,
    //     description: assetState.description,
    //     eqNr: assetState.eqNr,
    //  };
    // NewAsset(variables).then(result => {
    //     props.history.push('/QueryAssets')
    //     if(result.error) {
    //         console.log(result.error)
    //     }
    //     });
    // });
    render() {
    return (
        <Form.Row className="align-items-center">
            <Col xs="auto">
                <Form.Label htmlFor="assetNr">
                    nr środka trwałego
                </Form.Label>
            </Col>
            <Col xs="auto">
                <Form.Control
                    type="text"
                    name="assetNr"
                    id="assetNrId"
                    className="assetNr"
                    // onChange={handleAssetCreation}
                    // defaultValue={assetState.value}
                />
            </Col>
            <Col xs="auto">
                <Form.Label htmlFor="description">
                    opis
                </Form.Label>
            </Col>
            <Col xs="auto">
                <Form.Control
                    type="text"
                    name="description"
                    id="descriptionId"
                    className="description"
                    // onChange={handleAssetCreation}
                    // defaultValue={assetState.value}
                />
            </Col>
            <Col xs="auto">
                <Form.Label htmlFor="eqNr">
                    nr eq
                </Form.Label>
            </Col>
            <Col xs="auto">
                <Form.Control
                    type="text"
                    name="eqNr"
                    id="eqNrId"
                    className="eqNr"
                    // onChange={handleAssetCreation}
                    // defaultValue={assetState.value}
                />
            </Col>
            <Col xs="auto">
                <Form.Label htmlFor="history">
                    historia:
                </Form.Label>
                <Form.Control as="select">
                    {}
                </Form.Control>
            </Col>
            <HistoryForm />
        </Form.Row>
    )
    }
}

export default withRouter(AssetForm);
import React, { useState, useCallback, Component } from 'react';
import PropTypes from 'prop-types';
import { useMutation, useQuery } from 'urql';
import { CreateAsset as NewAsset } from '../common/mutations';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import HistoryForm from './HistoryForm';
import { withRouter } from 'react-router-dom';
import ManufDropdown from './ManufDropdown';
import store from '../../store';


class AssetForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            assetNr: this.props.asseNr,
            description: '',
            eqNr: '',
            serialNumber: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
        console.log(this.state.description)
    }

    componentDidUpdate(){
        store.dispatch({
            type: 'SET_ASSET_NR',
            assetNr: this.state.assetNr
        });
        store.dispatch({
            type: 'SET_EQ_NR',
            eqNr: this.state.eqNr
        });
        store.dispatch({
            type: 'SET_SERIAL_NR',
            serialNumber: this.state.serialNumber
        });
        store.dispatch({
            type: 'SET_DESCRIPTION',
            description: this.state.description
        });

    }

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
                    onChange={this.handleChange}
                    value={this.state.assetNr}
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
                    onChange={this.handleChange}
                    value={this.state.eqNr}
                />
            </Col>
            <Col xs="auto">
                <Form.Label htmlFor="eqNr">
                    nr seryjny
                </Form.Label>
            </Col>
            <Col xs="auto">
                <Form.Control
                    type="text"
                    name="serialNumber"
                    id="serialNumberId"
                    className="serialNumber"
                    onChange={this.handleChange}
                    value={this.state.serialNumber}
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
                    as="textarea"
                    onChange={this.handleChange}
                    value={this.state.description}
                />
            </Col>
            <Card>
                <Card.Body>
                    <ManufDropdown />
                    <HistoryForm />
                </Card.Body>
            </Card>
        </Form.Row>
    )
    }
}

export default withRouter(AssetForm);
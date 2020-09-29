import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';

import DeptDropdown from './DeptDropdown';
import StatusDropdown from './StatusDropdown';
import store from '../../store'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';


class HistoryForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            owner: '',
            inventoried: ''
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
    }

    componentDidUpdate(){
        store.dispatch({
            type: 'SET_OWNER',
            owner: this.state.owner
        });
        store.dispatch({
            type: 'SET_INVENTORIED',
            inventoried: this.state.inventoried
        })
    }

    render() {
    return (
        <div>
            <DeptDropdown />
            <StatusDropdown />
            <Form.Row className="align-items-center">
                <Col xs="auto">
                    <Form.Label htmlFor="owner">
                        właściciel
                    </Form.Label>
                </Col>
                <Col xs="auto">
                    <Form.Control
                        type="text"
                        name="owner"
                        id="ownerId"
                        className="owner"
                        onChange={this.handleChange}
                        value={this.state.owner}
                    />
                </Col>
            </Form.Row>
            <Form.Row>
            <Col xs="auto">
                    <Form.Label htmlFor="owner">
                        zinwentaryzowano
                    </Form.Label>
                </Col>
                <Col xs="auto">
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text>
                            <FontAwesomeIcon icon={faCalendarAlt} />
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                        type="date"
                        name="inventoried"
                        id="inventoriedId"
                        className="inventoried"
                        onChange={this.handleChange}
                        value={this.state.inventoried}
                    />
                    </InputGroup>
            </Col>
            </Form.Row>
        </div>
    )
    }
}

export default HistoryForm;
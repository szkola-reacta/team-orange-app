import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import DeptDropdown from './DeptDropdown';
import StatusDropdown from './StatusDropdown';
import store from '../../store'


class HistoryForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            owner: ''
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
        </div>
    )
    }
}

export default HistoryForm;
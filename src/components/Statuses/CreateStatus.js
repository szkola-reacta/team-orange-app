import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useMutation } from 'urql';
import { CreateStatus as NewStatus } from '../common/mutations';
import { useFormik } from 'formik';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom';


const CreateStatus = props => {

    const [updateStatusResult, updateStatus] = useMutation(NewStatus)

    const formik = useFormik({
        initialValues: {
            status: '',
        },

        onSubmit: values => {
            const variables = { status: values.status };
            updateStatus(variables).then(result => {
                props.history.push('/QueryStatuses')
                if(result.errror) {
                    console.log(result.error)
                }
            });
            console.log(updateStatusResult)
        }
    });

    return (
            <Form.Row className="align-items-center">
                <Col xs="auto">
                    <Form.Label htmlFor="statusId">
                        Status
                    </Form.Label>
                </Col>
                <Col xs="auto">
                    <Form.Control
                        type="text"
                        name="status"
                        id="statusId"
                        className="status"
                        defaultValue={formik.values.status}
                        onChange={formik.handleChange}
                    />
                </Col>
                <Col xs="auto">
                    <Button variant="primary" onClick={formik.handleSubmit}>Zapisz</Button>
                </Col>
                <Col xs="auto">
                    <Link to='/QueryStatuses'>cancel</Link>
                </Col>
            </Form.Row>
    )
};

CreateStatus.propTypes = {
    statusState: PropTypes.string
}

export default CreateStatus;
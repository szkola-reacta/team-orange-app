import React from 'react';
import PropTypes from 'prop-types';
import { useMutation } from 'urql';
import { CreateDepartment as NewDepartment } from '../common/mutations';
import { useFormik } from 'formik';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';


const CreateDepartment = props => {

    const [updateDepartmentResult, updateDepartment] = useMutation(NewDepartment);

    const formik = useFormik({
        initialValues: {
          name: '',
          detailedName: ''
        },

        onSubmit: values => {
        const variables = { name: values.name, detailedName: values.detailedName };
        updateDepartment(variables).then(result => {
            props.history.push('/QueryDepartments')
            if(result.error) {
                console.error(result.error);
            }
        });
        console.log(updateDepartmentResult);
      }
    });

      return (
          <Form.Row className="align-items-center">
              <Col xs="auto">
                    <Form.Label htmlFor="name">
                        Name
                    </Form.Label>
                </Col>
                <Col xs="auto">
                    <Form.Control
                        type="text"
                        name="name"
                        id="nameId"
                        className="name"
                        onChange={formik.handleChange}
                        defaultValue={formik.values.name}
                    />
                </Col>
                <Col xs="auto">
                    <Form.Label htmlFor='detailed Name'>
                        detailed Name
                    </Form.Label>
                </Col>
                <Col xs="auto">
                    <Form.Control
                        type="text"
                        name="detailedName"
                        id="detailedNameId"
                        className="detailedName"
                        onChange={formik.handleChange}
                        defaultValue={formik.values.detailedName}
                     />
                </Col>
                <Col xs="auto">
                    <Button variant="primary" onClick={formik.handleSubmit}>Zapisz</Button>
                </Col>
          </Form.Row>
      );
};


CreateDepartment.propTypes = {
    name: PropTypes.string,
    detailedName: PropTypes.string
}

export default CreateDepartment;
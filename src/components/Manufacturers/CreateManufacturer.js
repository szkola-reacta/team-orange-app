import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useMutation } from 'urql';
import { CreateManufacturer as NewManufacturer } from '../common/mutations';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';


const CreateManufacturer = () => {

    const blankManufacturer = { name: '' };
    const [redirect, RedirectToList] = useState('false');

    const [manufacturerState, setManufacturerState ] = useState([
        {...blankManufacturer},
     ]);

    const [createManufacturerResult, newManufacturer] = useMutation(NewManufacturer);

    const handleManufacturerChange = (e) => {
        const updatedManufacturer = [...manufacturerState];
        updatedManufacturer[e.target.name] = e.target.value;
        setManufacturerState(updatedManufacturer);
      };

      function handleRedirection() {
          RedirectToList('true')
        //   reexecuteQuery({requestPolicy: 'network-only'})
      }

          const submit = () => {
            const variables = { name: manufacturerState.name };
            newManufacturer(variables).then(result => {
                if(result.error) {
                    console.log(result.error)
                }
              });
              handleRedirection();
            //   reexecuteQuery({ requestPolicy: 'network-only' })
        };
        return (
            <div>
                {redirect}
                {redirect === 'false' ?
                <Form.Row className="align-items-center">
                <Col xs="auto">
                    <Form.Label sm="2">
                        Manufacturer
                    </Form.Label>
                </Col>
                <Col xs="auto">
                    <Form.Control
                        type="text"
                        name="name"
                        id="manufacturer_id"
                        className="name"
                        defaultValue={manufacturerState.value}
                        onChange={handleManufacturerChange}
                    />
                </Col>
                <Col xs="auto">
                    <Button variant="primary" onClick={() => submit()}>Zapisz</Button>
                </Col>
                <Col xs="auto">
                    <Link to='/QueryManufacturers'>cancel</Link>
                </Col>
                </Form.Row>
                    :
                <Redirect to='/QueryManufacturers'/>
                }
            </div>
        )
}

CreateManufacturer.propTypes = {
    manufacturerState: PropTypes.string
}

export default withRouter(CreateManufacturer);
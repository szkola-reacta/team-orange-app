import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useMutation, useQuery } from 'urql';
import { ManufacturerQuery } from '../common/queries';
import { EditManufacturer as UpdateManufacturer } from '../common/mutations';
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";
import { Redirect } from 'react-router';
import { withRouter } from 'react-router-dom';
import DeleteManufacturer from './DeleteManufacturer';


const EditManufacturer = (id) => {

    const [redirect, RedirectToList] = useState('false');

    const [updateManufacturerResult, updateManufacturer] = useMutation(UpdateManufacturer);

    const [result, reexecuteQuery] = useQuery({
        query: ManufacturerQuery,
        variables: { id: id.location.id },
        requestPolicy: 'network-only'
    });

    const { data, fetching, error } = result;

    const initManufacturer = { manufacturer: data };

    const [manufacturerState, setManufacturerState ] = useState([
        initManufacturer
    ]);

    if(fetching) return <p>Loading...</p>;
    if(error) return <p>{error.message}</p>;

    const handleManufacturerChange = (e) => {
        const updatedManufacturer = manufacturerState;
        updatedManufacturer[e.target.name] = e.target.value;
        setManufacturerState(updatedManufacturer);
      };

      const submit = () => {
        const variables = { id: id.location.id, name: manufacturerState.name || initManufacturer.name };
        updateManufacturer(variables).then(result => {
            if(result.error) {
                console.log(result.error)
            }
          });
          handleRedirection();
            reexecuteQuery({ requestPolicy: 'network-only' })
    };

      function handleRedirection() {
          RedirectToList('true')
          console.log(redirect)
      }

        return (
            <div>
                {redirect === 'false' ?
                <Form>
                <p>edit form</p>
                    <Form.Label sm="2">
                        Manufacturer
                    </Form.Label>
                    {data.manufacturer.map(manufacturer => (
                    <Form.Control
                        key={manufacturer.id}
                        type="text"
                        name="name"
                        id="manufacturer_id"
                        className="name"
                        defaultValue={manufacturer.name}
                        onChange={handleManufacturerChange}
                    />
                        ))}
                    <Button variant="primary" onClick={() => submit()}>Zapisz</Button>
                    <DeleteManufacturer id={id.location.id} onClick={() => handleRedirection()}/>
                    </Form>
                    :
                    <Redirect to='/QueryManufacturers'/>
                    }
            </div>
        )
}

EditManufacturer.propTypes = {
    manufacturerState: PropTypes.string
}

export default withRouter(EditManufacturer);

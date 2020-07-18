import React, { Component } from 'react';
import { useMutation, useQuery } from 'urql';
import { CreateAsset as NewAsset } from '../common/mutations';
import { StatusQuery, DepartmentQuery } from '../common/queries';
import { useFormik } from 'formik';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import AssetForm from './AssetForm';


class CreateAsset extends Component {
    constructor(props) {
        super(props);
        this.state = {
            departments: [],
            statuses: [],
        };
    }

    componentDidMount() {
        this.setState({
            statuses: this.props.statuses
        })
        console.log(this.props.statuses)
    }

    render() {
        return (
            <div>
                {/* <Statuses/> */}
                <AssetForm/>
            </div>
        )
    }

}

export default CreateAsset;
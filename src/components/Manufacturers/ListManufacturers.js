import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';
import { withRouter, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';


class ListManufacturers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            manufacturers: [],
            selected: ''
        };
    }

    componentDidMount() {
        this.setState({
            manufacturers: this.props.manufacturers
        })
    }

    render() {
        const { manufacturers } = this.props
    return (
             <Table responsive striped bordered variant="dark" hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>name</th>
                        <th>edit</th>
                    </tr>
                </thead>
                <tbody>
                    {manufacturers.map(i =>
                    <tr key={i.id}>
                        <td>{i.id}</td>
                        <td>{i.name}</td>
                        <td>
                            <Link to={{pathname: `/EditManufacturer/`, id: i.id}}>
                                <FontAwesomeIcon icon={faPencilAlt} />
                            </Link>
                        </td>
                    </tr>
                    )}
                </tbody>
            </Table>
        )
    }
}

export default withRouter(ListManufacturers);
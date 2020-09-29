import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';
import { withRouter, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';


class ListDepartments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            departments: [],
            selected: ''
        };
    }

    componentDidMount() {
        this.setState({
            departments: this.props.departments
        })
    }

    render() {
        const { departments } = this.props
    return (
             <Table responsive striped bordered variant="dark" hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>nazwa</th>
                        <th>szczegółowa nazwa</th>
                        <th>edit</th>
                    </tr>
                </thead>
                <tbody>
                    {departments.map(i =>
                    <tr key={i.id}>
                        <td>{i.id}</td>
                        <td>{i.name}</td>
                        <td>{i.detailedName}</td>
                        <td>
                            <Link to={{pathname: `/EditDepartment/`, id: i.id}}>
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

export default withRouter(ListDepartments);

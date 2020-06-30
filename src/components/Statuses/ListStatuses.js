import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { withRouter, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'


class ListStatuses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            statuses: [],
        };
    }

    componentDidMount() {
        this.setState({
            statuses: this.props.statuses,
        })
    }

    render() {
        const { statuses } = this.props
    return (
             <Table responsive striped bordered variant="dark" hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>status</th>
                        <th>edit</th>
                    </tr>
                </thead>
                <tbody>
                    {statuses.map(i =>
                    <tr key={i.id}>
                        <td>{i.id}</td>
                        <td>{i.status}</td>
                        <td>
                            <Link to={{pathname: `/EditStatus/`, id: i.id}}>
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

export default withRouter(ListStatuses);
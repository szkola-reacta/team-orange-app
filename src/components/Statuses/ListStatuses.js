import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { withRouter } from 'react-router-dom';
import EditStatus from './EditStatus';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'

class ListStatuses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            statuses: [],
            selected: ''
        };
        this.selectedStatus = this.selectedStatus.bind(this);
    }

    componentDidMount() {
        this.setState({
            statuses: this.props.statuses
        })
    }

    selectedStatus = (id) => {
        this.setState({
            selected: id
        })
    }

    render() {
        const { statuses } = this.props
    return (
        <div>
            {this.state.selected.length > 0 ?
            <EditStatus id={this.state.selected}/>
            :
             <Table responsive striped bordered variant="dark" hover size="sm">
                <thead>
                    <tr>
                        <th>status</th>
                        <th>edit</th>
                    </tr>
                </thead>
                <tbody>
                    {statuses.map(i =>
                    <tr key={i.id}>
                        <td>{i.status}</td>
                        <td><Button onClick={() => this.selectedStatus(i.id)}><FontAwesomeIcon icon={faPencilAlt} /></Button></td>
                    </tr>
                    )}
                </tbody>
            </Table>
                    }
        </div>
        )
    }
}

export default withRouter(ListStatuses);
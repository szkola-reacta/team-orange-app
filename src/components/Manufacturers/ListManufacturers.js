import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
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
        this.selectedManufacturer = this.selectedManufacturer.bind(this);
    }

    componentDidMount() {
        this.setState({
            manufacturers: this.props.manufacturers
        })
    }

    selectedManufacturer = (id) => {
        this.setState({
            selected: id
        })
    }

    render() {
        const { manufacturers } = this.props
    return (
        <div>
            {/* {this.state.selected.length > 0 ?
            <EditStatus id={this.state.selected}/>
            : */}
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
                            <Button onClick={() => this.selectedManufacturer(i.id)}>
                                <FontAwesomeIcon icon={faPencilAlt} />
                            </Button>
                            <Link to={{pathname: `/EditManufacturer/`, id: i.id}}><FontAwesomeIcon icon={faPencilAlt} /></Link>
                        </td>
                    </tr>
                    )}
                </tbody>
            </Table>
                    {/* } */}
        </div>
        )
    }
}

export default withRouter(ListManufacturers);
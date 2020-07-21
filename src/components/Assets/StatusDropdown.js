import React, { useState, Component } from 'react';
import { useFormik } from 'formik';
import { StatusQuery } from '../common/queries';
import { useQuery } from 'urql';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import store from '../../store'
import { connect } from 'react-redux';



const GetStatus = ({ search, id }) => {

    const [result] = useQuery({
        query: StatusQuery,
        variables: { search, id },
        requestPolicy: 'network-only'
    });
    const {data, fetching, error} = result;
    const statusesList = {statuses: data};

    if (fetching) return <p>Loading...</p>;
    if (error) return <p>{error.message}</p>;

    return (
        <div>
            <StatusDropdown statusList={statusesList.statuses}/>
        </div>
    )
};


class StatusDropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            statusList: this.props.statusList,
            status: '',
            statusId: '',
            search: '',
            id: '',
        };
        this.handleStatusChange = this.handleStatusChange.bind(this);
    }

    handleStatusChange(e){
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value,
        });
      };

    componentDidUpdate(){
        store.dispatch({
            type: 'SET_STATUS',
            status: this.state.status
        })
    }

    render() {
    return (
        <div>
            <DropdownButton id="dropdown-item-button" title={this.state.status ? this.state.status : 'wybierz status'} name="status" value={this.state.status}>
            {this.state.statusList.status.map(e =>
                <Dropdown.Item
                 as="button"
                 name="status"
                 value={e.status}
                 onClick={this.handleStatusChange}
                 key={`status-${e.id}`}>
                {e.status}</Dropdown.Item>
            )}
            </DropdownButton>
            </div>
        )
        }
    }

const mapStateToProps = function(store) {
    return {
        status: store.statusState.status
    }
}

export default connect(mapStateToProps)(GetStatus);
import React, { Component } from 'react';
import { StatusQuery } from '../common/queries';
import { useQuery } from 'urql';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import store from '../../store'


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
            id: ''
        };
        this.handleStatusChange = this.handleStatusChange.bind(this);
    }

    handleStatusChange(e){
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value.split(',')[0],
            statusId: value.split(',')[1]
        });
      };

    componentDidUpdate(){
        store.dispatch({
            type: 'SET_STATUS',
            status: this.state.status
        });
        store.dispatch({
            type: 'SET_STATUS_ID',
            statusId: this.state.statusId
        });
    }

    render() {
    return (
        <div>
            <DropdownButton id="dropdown-status-button" title={this.state.status ? this.state.status : 'wybierz status'} name="status" value={this.state.status}>
            {this.state.statusList.status.map(e =>
                <Dropdown.Item
                 as="button"
                 name="status"
                 value={[e.status, e.id]}
                 onClick={this.handleStatusChange}
                 key={`status-${e.id}`}>
                {e.status}</Dropdown.Item>
            )}
            </DropdownButton>
            </div>
        )
        }
    }

export default GetStatus;
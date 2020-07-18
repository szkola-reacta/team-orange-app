import React, { useState, Component } from 'react';
import { useFormik } from 'formik';
import { StatusQuery } from '../common/queries';
import { useQuery } from 'urql';
import Dropdown from 'react-bootstrap/Dropdown';
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
            search: '',
            id: ''
        };
        this.handleStatusChange = this.handleStatusChange.bind(this);
    }

    componentDidMount() {

        this.setState({
            statusList: this.props.statusList
        })

        console.log(this.state.statusList)
    }

    handleStatusChange(e) {
        const target = e.target;
        const value = target.defaultValue;
        const name = target.name;
        this.setState({
            status: value
        })
        store.dispatch({
            type: 'SET_STATUS',
            status: target.defaultValue
        })
        console.log(this.props.status)
      };

    render() {
    return (
        <div>
            <Dropdown>
                <Dropdown.Toggle variant="info" id="statusDropdown">
                    status
                </Dropdown.Toggle>
                <Dropdown.Menu>
                {this.state.statusList.status.map(i =>
                    <Dropdown.Item
                        name="status"
                        id="statusId"
                        className="status"
                        onClick={this.handleStatusChange}
                        defaultValue={i.status}
                        key={i.id}>
                        {i.status}
                    </Dropdown.Item>
                )}
                </Dropdown.Menu>
            </Dropdown>
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
import React, { Component } from 'react';
import { DepartmentQuery } from '../common/queries';
import { useQuery } from 'urql';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import store from '../../store'


const GetDept = ({ search, id }) => {

    const [result] = useQuery({
        query: DepartmentQuery,
        variables: { search, id },
        requestPolicy: 'network-only',
    });

    const {data, fetching, error} = result;
    const departmentList = { departments: data }
    console.log(departmentList)

    if (fetching) return <p>Loading...</p>;
    if (error) return <p>{error.message}</p>;

    return (
        <div>
            <DeptDropdown deptList={departmentList.departments}/>
        </div>
    )
};


class DeptDropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deptList: this.props.deptList,
            deptName: '',
            deptId: '',
            search: '',
            id: ''
        };
        this.handleDeptChange = this.handleDeptChange.bind(this);
    }

    handleDeptChange(e){
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value.replace(',', ' ').split(',',1)[0],
            deptId: value.split(',')[2]
        });
    }

    componentDidUpdate(){
        store.dispatch({
            type: 'SET_DEPT_NAME',
            deptName: this.state.deptName
        });
        store.dispatch({
            type: 'SET_DEPT_ID',
            deptId: this.state.deptId
        });
    }

    render() {
        return (
        <div>
            <DropdownButton id="dropdown-dept-button" title={this.state.deptName  ? this.state.deptName : 'wybierz dział'} name="deptName" value={this.state.deptName}>
            {this.state.deptList.department.map(e =>
                <Dropdown.Item
                 as="button"
                 name="deptName"
                 value={[e.name, e.detailedName, e.id]}
                 onClick={this.handleDeptChange}
                 key={`dept-${e.id}`}>
                {e.name}: {e.detailedName}</Dropdown.Item>
            )}
            </DropdownButton>
            </div>
        )
    }
}

export default GetDept;
import React, { Component } from 'react';
import { ManufacturerQuery } from '../common/queries';
import { useQuery } from 'urql';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import store from '../../store'


const GetManuf = ({ search, id }) => {
    const [result] = useQuery({
        query: ManufacturerQuery,
        variables: { search, id },
        requestPolicy: 'network-only'
    });

    const {data, fetching, error} = result;
    const manufList = {manufacturers: data};

    if (fetching) return <p>Loading...</p>;
    if (error) return <p>{error.message}</p>;

    return (
        <div>
            <ManufDropdown manufList={manufList.manufacturers}/>
        </div>
    )
};


class ManufDropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            manufList: this.props.manufList,
            manuf: '',
            manufId: '',
            search: '',
            id: ''
        }
        this.handleManufChange = this.handleManufChange.bind(this);
        console.log(this.props.manufList)
    }

    handleManufChange(e){
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value.split(',')[0],
            manufId: value.split(',')[1]
        });
    };

    componentDidUpdate(){
        store.dispatch({
            type: 'SET_MANUF',
            manuf: this.state.manuf
        });
        store.dispatch({
            type: 'SET_MANUF_ID',
            manufId: this.state.manufId
        });
    }

    render() {
        return (
            <div>
                <DropdownButton
                 id="dropdown-status-button"
                 title={this.state.manuf ? this.state.manuf : 'wybierz producenta'}
                 name="manuf"
                 value={this.state.manuf}
                 >
                {this.state.manufList.manufacturer.map(e =>
                    <Dropdown.Item
                        as="button"
                        name="manuf"
                        value={[e.name, e.id]}
                        onClick={this.handleManufChange}
                        key={`manuf-${e.id}`}>
                        {e.name}
                    </Dropdown.Item>
                )}
                </DropdownButton>
                </div>
            )
            }
        }

    export default GetManuf;
import React, { Component } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Octicon, {X} from '@primer/octicons-react';

import '../style/Assets.css';

import ListStatuses from './ListStatuses';
import CreateStatus from './CreateStatus';



class Statuses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      data: [],
      filteredData: []
    };
  }
      handleInputChange = event => {
        const query = event.target.value;
        this.setState(prevState => {
          const filteredData = prevState.data.filter(element => {
            return (
              element.status.toLowerCase().includes(query.toLowerCase())
            )
          });

          return {
            query,
            filteredData
          };
        });
      };

      handleClearInput = () => {
          this.setState({
              filteredData: this.state.data
          });
      }
      componentDidMount() {
        this.setState({
          data: this.props.statusesAll.status,
          filteredData: this.props.statusesAll.status
        })
  }
      render() {

        return (
            <div>
                <InputGroup className="searchForm">
                    <FormControl
                    placeholder="Search for..."
                    aria-label="Search for..."
                    aria-describedby="basic-addon2"
                    value={this.state.query}
                    onChange={this.handleInputChange}
                    />
                    <InputGroup.Append>
                    <InputGroup.Text id="basic-addon2" onClick={this.handleClearInput}>
                        <Octicon icon={X}/>
                    </InputGroup.Text>
                    </InputGroup.Append>
                </InputGroup>
          <ListStatuses statuses={this.state.filteredData} />
          <CreateStatus />
          </div>
        );
      }
  }
export default Statuses;
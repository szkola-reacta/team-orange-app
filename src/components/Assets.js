import React, { Component } from 'react';
import axios from 'axios';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Octicon, {X} from '@primer/octicons-react'

import AssetList from './AssetList';
import './Assets.css';


class Assets extends Component {
    state = {
        query: "",
        data: [],
        filteredData: []
      };

      handleInputChange = event => {
        const query = event.target.value;
        this.setState(prevState => {
          const filteredData = prevState.data.filter(element => {
            return element.assetNr.toLowerCase().includes(query.toLowerCase());
          });

          return {
            query,
            filteredData
          };
        });
      };

      handleClearInput = () => {
          this.setState({
              filteredData: []
          });
      }

      componentDidMount() {
          const DATABASE = `/database.json`;
          axios.get(DATABASE)
              .catch(function (error) {
              if (error.response.status) {
                  console.log(
                          { errorMessage: error.message }
                      )
              }
          })
          .then(response => this.setState({
              data: response.data.assets,
              filteredData: response.data.assets
              })
            )
      }
      render() {
        console.log(this.state.data)
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
          <AssetList assets={this.state.filteredData} />
          </div>
        );
      }
  }
export default Assets;
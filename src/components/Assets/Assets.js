import React, { Component } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Octicon, {X} from '@primer/octicons-react'

import AssetList from './AssetList';
import './style/Assets.css';


class Assets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      data: [],
      filteredData: [],
    };
  }
      handleInputChange = event => {
        const query = event.target.value;
        this.setState(prevState => {
          const filteredData = prevState.data.filter(element => {
            return (
              element.assetNr.toLowerCase().includes(query.toLowerCase()) ||
              element.eqNr.toLowerCase().includes(query.toLowerCase()) ||
              element.serialNumber.toLowerCase().includes(query.toLowerCase()) ||
              element.manufacturer.name.toLowerCase().includes(query.toLowerCase())
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
              filteredData: []
          });
      }
      componentDidMount() {
        this.setState({
          data: this.props.assetsAll.asset,
          filteredData: this.props.assetsAll.asset
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
          <AssetList assets={this.state.filteredData} />
          </div>
        );
      }
  }
export default Assets;
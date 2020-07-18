import React, { Component } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Octicon, {X} from '@primer/octicons-react'
import { Link } from 'react-router-dom';
import ListAsset from './ListAsset';

import '../style/Assets.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';


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
              element.manufacturer.name.toLowerCase().includes(query.toLowerCase()) //TODO: search through history
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
          data: this.props.assetsAll.asset,
          filteredData: this.props.assetsAll.asset
        })
  }
      render() {

        return (
            <div>
              <Link to={{pathname: `/CreateAsset/`}}>
                    new one <FontAwesomeIcon icon={faPencilAlt} />
              </Link>
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
          <ListAsset assets={this.state.filteredData} />
          </div>
        );
      }
  }
export default Assets;
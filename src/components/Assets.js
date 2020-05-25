import React, { Component } from 'react';
import axios from 'axios';
import AssetList from './AssetList';


class Assets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            assetList: [],
            errorMessage: '',
        };
    }

    componentDidMount() {
        const DATABASE = '/database.json';
        axios.get(DATABASE)
            .catch(function (error) {
                if (error.response.status) {
                    this.setState(
                        { errorMessage: error.response.status }
                    )
                }
            })
        .then(response => this.setState({
            assetList: response.data.assets,
            }))
    }

    render() {
        const {assetList, errorMessage } = this.state;
        return (
            <div>
                {assetList.length > 0 ?
               <AssetList assets={assetList} />
               : errorMessage}
            </div>
        )
    }
}

export default Assets;
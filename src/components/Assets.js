import React, { Component } from 'react';
import axios from 'axios';


class Assets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            assetList: [],
            errorMessage: ''
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
        const {assetList} = this.state;
        return (
            <div>
                <ul>{assetList.map((item) =>
                <li key={item.id}>{item.assetNr}</li>
                )}
                </ul>
            </div>
        )
    }
}

export default Assets;
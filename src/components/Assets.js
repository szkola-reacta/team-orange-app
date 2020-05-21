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
        const DATABASE = '/adatabase.json';
        axios.get(DATABASE)
            .catch(function (error) {
            if (error.response.status) {
                console.log(
                        { errorMessage: error.message }
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
                { assetList.length > 0 ?
                <ul>{assetList.map((item) =>
                <li key={item.id}>{item.assetNr}</li>
                )}
                </ul>
                 : errorMessage }
            </div>
        )
    }
}

export default Assets;
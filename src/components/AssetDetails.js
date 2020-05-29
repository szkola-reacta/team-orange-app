import React, { Component } from 'react';
import axios from 'axios';


class AssetDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            assetId: '',
            assetDetails: []
        };
        console.log(this.props.params)
    };

    componentDidMount() {
        const {text, match: {params}} = this.props;
        const {id} = params
        this.setState({
            assetId: this.props.params
        })
        console.log({params})
        const DATABASE = `/database.json`;
        axios.get(DATABASE, { })
            .catch(function (error) {
            if (error.response.status) {
                console.log(
                        { errorMessage: error.message }
                    )
            }
        })
        .then(response => {
            const data = response.data.assets
            console.log(data)
        }
            )
    }

    render() {
        const {assetId} = this.state;
    return (
            <div>
                <p>{this.props.text} id:{this.props.id} assetId:{assetId}</p>
            </div>
        )
    }
}

export default AssetDetails;
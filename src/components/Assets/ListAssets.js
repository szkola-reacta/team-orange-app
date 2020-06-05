import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'
import Button from "react-bootstrap/Button";


class ListAssets extends Component {
    constructor(props) {
        super (props);
        this.state = {
            assets: [],
            sort: 'desc'
        }
    }

    componentDidMount() {
        this.setState({
            assets: this.props.assets.assets
        });
        console.log(this.state.assets)
    }

    componentWillUnmount() {
        this.setState({
            assets: ''
        })
    }

    render() {
        const { assets } = this.state;
        return(
            <div>

            </div>
        )
    }
}
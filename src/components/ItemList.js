import React, { Component } from 'react';

import axios from 'axios';

class ItemList extends Component {
    state = {
        items: []
    }

    componentDidMount() {
        axios.get('../database.json')
            .then(res => {
                const items = res.data.history;
                this.setState({ items });
                console.log(items);
            })
    }

    render() {
        return (
            <ul>
                {
                    this.state.items.map(item => <li key={item.id}>{item.assetNr}</li>)}
                {
                    this.state.items.map(item => <li key={item.id}>{item.id}</li>)
                }
            </ul>
        )
    }
}

export default ItemList;
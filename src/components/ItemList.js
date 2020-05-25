import React, { Component } from 'react';

import axios from 'axios';

class ItemList extends Component {
    state = {
        items: []
    }

    componentDidMount() {
        axios.get('../database.json')
            .then(res => {
                const items = res.data;
                this.setState({ items });
                console.log(items);
            })
    }

    render() {
        return (
            <ul>
                {
                    this.state.items.map(item => <li key={2}>{item}</li>)
                }
            </ul>
        )
    }
}

export default ItemList;
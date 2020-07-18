import React, { Component } from 'react';
import DeptDropdown from './DeptDropdown';
import StatusDropdown from './StatusDropdown';


class HistoryForm extends Component {

    render() {
    return (
        <div>
            <DeptDropdown />
            <StatusDropdown />
        </div>
    )
    }
}

export default HistoryForm;
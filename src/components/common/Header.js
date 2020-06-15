import React from "react";
import { Link, withRouter } from 'react-router-dom';


const Header = () => {
    return (
        <p>
            <Link to='/'>Assets</Link>|
            <Link to='/QueryStatuses'>Statuses</Link>|
            <Link to='/QueryManufacturers'>Manufacturers</Link>
        </p>
    )
}

export default withRouter(Header);

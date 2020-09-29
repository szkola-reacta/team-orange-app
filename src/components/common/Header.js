import React from "react";
import { Link, withRouter } from 'react-router-dom';


const Header = () => {
    return (
        <p>
            <Link to='/'>Środki Trwałe</Link>|
            <Link to='/QueryStatuses'>Statusy</Link>|
            <Link to='/QueryManufacturers'>Producenci</Link>|
            <Link to='/QueryDepartments'>Działy</Link>
        </p>
    )
}

export default withRouter(Header);

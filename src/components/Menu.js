import React from 'react';

import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';

const Menu = (props) => {
    return (
        <Nav>
            <NavItem>
                <Link className="nav-link" to="/">
                Home
                </Link>
            </NavItem>
            <NavItem>
                <Link className="nav-link" to="/tasks">
                    Tasks
                </Link>
            </NavItem>
            <NavItem>
                <Link className="nav-link" to="/about">
                    About
                </Link>
            </NavItem>
        </Nav>
    )

}

export default withRouter(Menu);
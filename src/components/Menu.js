import React from 'react';

import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';

import { isAuthenticated, setAuthenticated } from '../utils/LoginManager';

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
            {isAuthenticated() ? (
                <NavItem>
                    <NavLink
                        href="#!"
                        onClick={() => {
                            setAuthenticated(false);
                            props.history.push('/');
                        }}
                    >
                        Logout
                    </NavLink>
                </NavItem>
            ) : null }
        </Nav>
    )

}

export default withRouter(Menu);
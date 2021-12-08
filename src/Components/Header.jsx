import React from "react";
import { NavLink } from 'react-router-dom';

import logo from "../images/qa.jpeg";

const Header = () => {
    return (
        <nav className="navbar navbar-expand md navbar-light">
            <div className="navbar navbar-expand md navbar-light">
                <NavLink to="/">
                    <img src={logo} alt="CCC" />
                </NavLink>
                <div className="collapse navbar-collapse" id="navBarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/whatIsOn">
                                What's On
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/comingSoon">
                                Coming Soon
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/signUp">
                                Sign Up
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/yourVisit">
                                Your Visit
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/bookTicket">
                                Book Ticket
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;

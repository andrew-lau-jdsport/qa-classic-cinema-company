import react from "react";
import { Link, NavLink } from 'react-router-dom';

import logo from "../images/logo.svg";

const Header = () => {
    return (
        <div>
            <nav>
                <NavLink to="/">
                    <img src={logo} alt="CCC" />
                </NavLink>
                <div>
                    <ul>
                        <li>
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
            </nav>
        </div>
    );
};

export default Header;

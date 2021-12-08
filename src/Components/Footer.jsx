import React from "react";
import { Link, NavLink } from 'react-router-dom';

import logo from "../images/qa.jpeg";

const Footer = () => {
    return (
      <div>
            <nav>
                <NavLink to="/">
                    <img src={logo} alt="CCC" />
                </NavLink>
                <div>
                    <ul>
                        <li>
                            MORE INFO
                        </li>
                        <li>
                            <NavLink to="/aboutus">
                                About us
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/faq">
                                FAQ
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contactus">
                                Contact us
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>
                            FIND US
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>
                            FOLLOW US
                        </li>
                    </ul>
                </div>
            </nav>
      </div>
    );
};

export default Footer;

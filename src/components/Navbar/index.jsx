// Filename - "./components/Navbar.js

import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faUser, faEllipsis } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
	return (
		<>
			<Nav>
				<NavMenu>
					<NavLink to="/my-info" activeStyle>
					<FontAwesomeIcon icon={faUser} size="3x" className="icon"/>
						My Info
					</NavLink>
					<NavLink to="/" activeStyle>
						<FontAwesomeIcon icon={faHouse} size="3x" className="icon"/>
						Home
					</NavLink>
					<NavLink to="/More" activeStyle>
					<FontAwesomeIcon icon={faEllipsis} size="3x" className="icon"/>
						More
					</NavLink>
				</NavMenu>
			</Nav>
		</>
	);
};

export default Navbar;

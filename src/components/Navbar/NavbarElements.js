// Filename - ./components/Navbar.js

//import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
	background: #111;
	height: 85px;
	display: flex;
	justify-content: space-between;
	padding-left: 1vw;
	margin-left: -5px;
	z-index: 12;
	position: fixed;
  	bottom: 0;
  	width: 100%;
`;

export const NavLink = styled(Link)`
	color: #808080;
	display: grid;
	text-decoration: none;
	padding: 0 1rem;
	padding-bottom: 5px;
	height: 100%;
	cursor: pointer;
	&.active {
		color: red;
	}
	
`;


export const NavMenu = styled.div`
	display: flex;
	margin-right: -24px;
	position: absolute;
	width: 100px;
	white-space: nowrap; 
	position: fixed;
  	bottom: 0;

`;

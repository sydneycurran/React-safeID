// Filename - pages/index.js

import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneVolume, faHeartPulse, faUtensils } from '@fortawesome/free-solid-svg-icons'





const Home = () => {
	return (
		<div>
			<div>
				<div className="header">
					<h1>safeID</h1>
				</div>
				<div className="dropdown-container">
					<select className="dropdown" id="language-dropdown">
						<option value="">Select Language</option>
						<option value="english">English</option>
						<option value="spanish">Spanish</option>
						<option value="french">French</option>
						<option value="german">German</option>
						<option value="chinese">Chinese</option>
					</select>
				</div>
				<NavLink to='/rest-id'>
					<div id="restaruantid" className="menu-item" onclick="">
					<FontAwesomeIcon icon={faUtensils} size="xl" className="home-icon" color="turquoise"/>
						<span>Restaurant ID</span>
					</div>
				</NavLink>
				<NavLink to="/med-id" >
					<div className="menu-item">
					<FontAwesomeIcon icon={faHeartPulse} size="xl" className="home-icon" color="red"/>
						<span>Medical ID</span>
					</div>
				</NavLink>

				<NavLink to='get-help'>
					<div className="menu-item get-help">
					<FontAwesomeIcon icon={faPhoneVolume} size="xl" className="home-icon"/>
						<span>Emergency Assistance</span>
					</div>
				</NavLink>
			</div>

			<div id="bottom-pad" />

		</div>
	)
};

export default Home;

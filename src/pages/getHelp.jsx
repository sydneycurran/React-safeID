import React from "react";

const Help = () => {
	return (
		<div>
			<h1 class="emergency-title">Emergency Assistance</h1>
            <input type="text" placeholder="Search location..." id="location-search" class="rounded-input"/>
            <p class="emergency-info">All emergency response: <b>911</b></p>

            <button class="call-button">Call Now</button>
		</div>
	)
};

export default Help;
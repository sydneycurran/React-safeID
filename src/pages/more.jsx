import React from "react";

const More = () => {
	return (
		<div>
			<>
				<title>Settings - SafeID</title>
				<link rel="stylesheet" href="master-styles.css" />

				<div>
					<div className="header">
						<h1>Settings</h1>
						<p className="user-info">Last ID update: April 3, 2024</p>
					</div>
					<div className="settings-container">
						<div className="settings-item">
							<span className="label-text">Default:</span>
							<select className="dropdown" id="language-dropdown">
								<option value="english">English</option>
								<option value="spanish">Spanish</option>
								<option value="french">French</option>
								<option value="german">German</option>
								<option value="chinese">Chinese</option>
							</select>
						</div>
						<div className="settings-item">
							<span className="label-text">Enable Notifications:</span>
							<label className="checkbox">
								<input type="checkbox" defaultChecked="checked" />
								<span className="checkmark" />
							</label>
						</div>
						<div className="settings-item">
							<span className="label-text">Dark Mode:</span>
							<label className="checkbox">
								<input type="checkbox" />
								<span className="checkmark" />
							</label>
						</div>
						<div className="settings-item">
							<span className="label-text" style={{ marginRight: 2 }}>
								No Data Mode
							</span>
							<span className="info-icon" data-tooltip="Allows offline usage">
								i
							</span>

							<label className="checkbox">
								<input type="checkbox" />
								<span className="checkmark" />
							</label>
						</div>
						<div className="settings-item">
							<span className="label-text">Text Size:</span>
							<div>
								<button className="text-size small">Aa</button>
								<button className="text-size medium">Aa</button>
								<button className="text-size large">Aa</button>
							</div>
						</div>
						<div className="settings-item">
							<span className="label-text" style={{ marginRight: "-15px" }}>
								Auto-update
							</span>
							<span
								className="info-icon"
								data-tooltip="Automatically install updates"
							>i
							</span>
							<label className="checkbox">
								<input type="checkbox" defaultChecked="checked" />
								<span className="checkmark" />
							</label>
						</div>
						<div className="settings-item">
							<span className="label-text">Privacy Mode </span>
							<span className="info-icon" data-tooltip="Blur data when not in use">
								i
							</span>
							<label className="checkbox">
								<input type="checkbox" />
								<span className="checkmark" />
							</label>
						</div>
					</div>
					<div className="bottom-menu">
						<div>
							<a href="my-info.html">
								<img className="not-active-icon" src="imgs/My-Info-Red.ico" />
							</a>
							<p>My Info</p>
						</div>
						<div className="not-active-icon">
							<a href="homeBLACK.html">
								<img src="imgs/building.png" />
							</a>
							<p>Home</p>
						</div>
						<div className="active">
							<img src="imgs/More-Menu-Dark.ico" />
							<p>More</p>
						</div>
					</div>
				</div>
			</>

			<div id="bottom-pad" />
		</div>
	)
};

export default More;
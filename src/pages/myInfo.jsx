import React, { useState } from "react";
import PersonalInfo from "../components/PersonalInfo";
import { NavLink } from "react-router-dom";
import { Info } from "../components/IDEntry";
 

var x = 0

const MyInfo = () => {
	x++

	const [foodAll, setFoodAll] = useState([])
	fetch("http://localHost:8000/food")
		.then(res => res.json())
		.then(json => setFoodAll(json.allergies))


	const [otherAll, setOtherAll] = useState([])
	fetch("http://localHost:8000/other-all")
		.then(res => res.json())
		.then(json => setOtherAll(json.allergies))

	const [otherInf, setOtherInf] = useState([])
	fetch("http://localHost:8000/other-health")
		.then(res => res.json())
		.then(json => setOtherInf(json.info))

	const [medCond, setMedCond] = useState([])
	fetch("http://localHost:8000/medical-conditions")
		.then(res => res.json())
		.then(json => setMedCond(json.conditions))

	const [meds, setMeds] = useState([])
	fetch("http://localHost:8000/medications")
		.then(res => res.json())
		.then(json => setMeds(json.meds))

	const [personalInfo, setPersonalInfo] = useState([])
	fetch("http://localHost:8000/personal-info")
		.then(res => res.json())
		.then(json => setPersonalInfo(json))

	return (
		<div>
			<link rel="stylesheet" href="master-styles.css" />
			<div className="info-section">
				{x < 5 ? <></> : <PersonalInfo info={personalInfo} />}
			</div>
			<NavLink to="/edit-food-allergies">
				<div className="info-section">
					<h3>Food Allergies</h3>
					<div className="info-list">
						{foodAll.map(all => <Info name={all} />)}
					</div>
				</div>
			</NavLink>
			<NavLink to="/edit-other-allergies">
				<div className="info-section">
					<h3>Other Allergies</h3>
					<div className="info-list">
						{otherAll.map(all => <Info name={all} />)}
					</div>
				</div>
			</NavLink>
			<NavLink to="/edit-med-conditions">
				<div className="info-section">
					<h3>Medical Conditions</h3>
					<div className="info-list">
						{medCond.map(all => <Info name={all} />)}
					</div>
				</div>
			</NavLink>
			<NavLink to="/edit-health-info">
				<div className="info-section">
					<h3>Medications</h3>
					<p>{meds}</p>
				</div>
				<div className="info-section">
					<h3>Other Health Info</h3>
					<div className="info-list">
						{otherInf.map(all => <Info name={all} />)}
					</div>
				</div>
			</NavLink>

			<div id="bottom-pad" />
		</div>

	)
};

export default MyInfo;
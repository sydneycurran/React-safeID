import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import IDEntry from "../components/IDEntry";
import PersonalInfo from "../components/PersonalInfo";

const MedicalID = () => {
	const [isFlipped, setFlipped] = useState(false);

	const handleFlip = () => {
		console.log("translate")
		setFlipped(!isFlipped);
	};

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
			<div className="phone-container">
				<div className="header">
					<h1>Medical ID</h1>
				</div>
				<ReactCardFlip isFlipped={isFlipped} flipDirection="vertical" id="medical">
					<div className="flip-card">
						<div id="medical" className="flip-card-front">
							<PersonalInfo info={personalInfo} />

							{medCond.length > 0 ?
								<>
									<div class="headerblock">
										<h1 class="four" >Medical Conditions</h1>
									</div>
									<div>
										{medCond.map(item =>
											<IDEntry name={item} translateTo="spanish" />)}
									</div>
								</> : <></>
							}

							{meds.length > 0 ?
								<>
									<div class="headerblock">
										<h1 class="four" >Medications</h1>
									</div>
									<div class="entry">
										<h1 class="two">{meds}</h1>
										<img class="entry-info-button" src="imgs/left arrow.webp" alt="info button" />
									</div>
								</> : <></>
							}

							{foodAll.length > 0 || otherAll.length > 0 ?
								<>
									<div class="headerblock">
										<h1 class="four" >Allergies</h1>
									</div>
									<div>
										{foodAll.map(item =>
											<IDEntry name={item} translateTo="spanish" />)}
										{otherAll.map(item =>
											<IDEntry name={item} translateTo="spanish" />)}
									</div>
								</> : <></>
							}



							{otherInf.length > 0 ?
								<>
									<div class="headerblock">
										<h1 class="four" >Supplementary Info</h1>
									</div>
									<div>
										{otherInf.map(item =>
											<IDEntry name={item} translateTo="spanish" />)}
									</div>
								</> : <></>
							}
							<div id="card-button">
								<button onClick={() => handleFlip()} id="translate-button">See English</button>
							</div>
							<div id="card-pad" />
						</div>
					</div>
					<div className="flip-card" >
						<div id="medical" className="flip-card-back">
							<PersonalInfo info={personalInfo} />

							{medCond.length > 0 ?
								<>
									<div class="headerblock">
										<h1 class="four" >Medical Conditions</h1>
									</div>
									<div>
										{medCond.map(item =>
											<IDEntry name={item} />)}
									</div>
								</> : <></>
							}

							{meds.length > 0 ?
								<>
									<div class="headerblock">
										<h1 class="four" >Medications</h1>
									</div>
									<div class="entry">
										<h1 class="two">{meds}</h1>
										<img class="entry-info-button" src="imgs/left arrow.webp" alt="info button" />
									</div>
								</> : <></>
							}

							{foodAll.length > 0 || otherAll.length > 0 ?
								<>
									<div class="headerblock">
										<h1 class="four" >Allergies</h1>
									</div>
									<div>
										{foodAll.map(item =>
											<IDEntry name={item} />)}
										{otherAll.map(item =>
											<IDEntry name={item} />)}
									</div>
								</> : <></>
							}



							{otherInf.length > 0 ?
								<>
									<div class="headerblock">
										<h1 class="four" >Supplementary Info</h1>
									</div>
									<div>
										{otherInf.map(item =>
											<IDEntry name={item} />)}
									</div>
								</> : <></>
							}

							<div id="card-button">
								<button onClick={() => handleFlip()} id="translate-button">See Translation</button>
							</div>
							<div id="card-pad" />
						</div>

					</div>

				</ReactCardFlip>

			</div>

			<div id="bottom-pad" />
		</div>
	)
};

export default MedicalID;
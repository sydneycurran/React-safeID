import React, { useState } from "react";
import { Button } from "react-native-web";
import ReactCardFlip from "react-card-flip";

const MedicalID = () => {
	const [isFlipped, setFlipped] = useState(false);

	const handleFlip = () => {
		console.log("translate")
		setFlipped(!isFlipped);
	};
	const [medCond, setMedCond] = useState([])
	fetch("http://localHost:8000/medical-conditions")
		.then(res => res.json())
		.then(json => setMedCond(json.conditions))

	return (
		<div>
			<link rel="stylesheet" href="master-styles.css" />
			<div className="phone-container">
				<div className="header">
					<h1>Medical ID</h1>
				</div>
				<ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
					<div className="flip-card">
						<div id="medical" className="flip-card-front">
							<div class="entry">

								<img class="one" src="imgs/peanut.jpeg" alt="Dairy" />
								<h1 class="two" >Los lácteos</h1>
								<img class="entry-info-button" src="imgs/info.png" alt="info button" />
							</div>
							<div id="card-button">
								<button onClick={() => handleFlip()} id="translate-button">See English</button>
							</div>
							<div id="card-pad" />
						</div>
					</div>
					<div className="flip-card" >
						<div id="medical" className="flip-card-back">

							<div class="headerblock">
								<h1 class="four" >Medical Conditions</h1>
							</div>

							<div class="entry">
								<h1 class="two" >Irritable Bowel Syndrome</h1>
								<img class="entry-info-button" src="imgs/left arrow.webp" alt="info button" />
							</div>

							<div class="entry">
								<h1 class="two" >Arthritis</h1>
								<img class="entry-info-button" src="imgs/left arrow.webp" alt="info button" />
							</div>

							<div class="entry">
								<h1 class="two" >Diabetes</h1>
								<img class="entry-info-button" src="imgs/left arrow.webp" alt="info button" />
							</div>

							<div class="headerblock">
								<h1 class="four" >Allergies</h1>
							</div>

							<div class="entry">
								<h1 class="two" >Bee Stings</h1>
								<img class="entry-info-button" src="imgs/left arrow.webp" alt="info button" />
							</div>

							<div class="headerblock">
								<h1 class="four" >Supplementary Information</h1>
							</div>

							<div class="entry">

								<h1 class="two" >Carries Insulin</h1>
								<img class="entry-info-button" src="imgs/left arrow.webp" alt="info button" />
							</div>

							<div class="entry">
								<h1 class="two" >Service Dog</h1>
								<img class="entry-info-button" src="imgs/left arrow.webp" alt="info button" />
							</div>

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
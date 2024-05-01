import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import IDEntry from "../components/IDEntry";

const RestaurantID = () => {
	const [isFlipped, setFlipped] = useState(false);

	const handleFlip = () => {
		console.log("translate")
		setFlipped(!isFlipped);
	};

	const [foodAll, setFoodAll] = useState([])
	fetch("http://localHost:8000/food")
		.then(res => res.json())
		.then(json => setFoodAll(json.allergies))


	return (
		<div>
			<link rel="stylesheet" href="master-styles.css" />
			<div className="phone-container">
				<div className="header">
					<h1>I Have Allergies</h1>
				</div>
				<ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
					<div className="flip-card">
						<div className="flip-card-front">
							<div>
								{foodAll.map(item =>
									<IDEntry name={item} translateTo="spanish" />)}
							</div>
							<div id="card-button">
								<button onClick={() => handleFlip()} id="translate-button">See Translation</button>
							</div>
							<div id="card-pad" />
						</div>
					</div>
					<div className="flip-card">
						<div className="flip-card-back">
							<div>
								{foodAll.map(item =>
									<IDEntry name={item}/>)}
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

export default RestaurantID;
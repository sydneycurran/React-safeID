import React, {useState} from "react";
import ReactCardFlip from "react-card-flip";

const RestaurantID = () => {
	const [isFlipped, setFlipped] = useState(false);

	const handleFlip = () => {
		console.log("translate")
		setFlipped(!isFlipped);
	};

	return (
		<div>
			<link rel="stylesheet" href="master-styles.css" />
			<div className="phone-container">
				<div className="header">
					<h1>Allergy ID</h1>
				</div>
				<ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
					<div className="flip-card">
						<div className="flip-card-front">
							<div className="entry">
								{/* <img src="imgs/Home-Dark.png" alt="Icon" style="width:300px;height:300px;"> */}
								<img className="one" src="imgs/peanut.jpeg" alt="Dairy" />
								<h1 className="two">Los lácteos</h1>
								<img
									className="entry-info-button"
									src="imgs/info.png"
									alt="info button"
								/>
							</div>
							<div className="entry">
								{/* <img src="imgs/Home-Dark.png" alt="Icon" style="width:300px;height:300px;"> */}
								<img className="one" src="imgs/eggs.jpeg" alt="Eggs" />
								<h1 className="two">Huevos</h1>
								<img
									className="entry-info-button"
									src="imgs/info.png"
									alt="info button"
								/>
							</div>
							<div className="entry">
								{/* <img src="imgs/Home-Dark.png" alt="Icon" style="width:300px;height:300px;"> */}
								<img className="one" src="imgs/shellfish.jpeg" alt="shellfish" />
								<h1 className="two">Mariscos</h1>
								<img
									className="entry-info-button"
									src="imgs/info.png"
									alt="info button"
								/>
							</div>
							<div id="card-button">
								<button onClick={() => handleFlip()} id="translate-button">See Translation</button>
							</div>
							<div id="card-pad" />
						</div>
					</div>
					<div className="flip-card">
						<div className="flip-card-back">
							<div className="entry">
								{/* <img src="imgs/Home-Dark.png" alt="Icon" style="width:300px;height:300px;"> */}
								<img className="one" src="imgs/peanut.jpeg" alt="Dairy" />
								<h1 className="two">Dairy</h1>
								<img
									className="entry-info-button"
									src="imgs/info.png"
									alt="info button"
								/>
							</div>
							<div className="entry">
								{/* <img src="imgs/Home-Dark.png" alt="Icon" style="width:300px;height:300px;"> */}
								<img className="one" src="imgs/eggs.jpeg" alt="Eggs" />
								<h1 className="two">Eggs</h1>
								<img
									className="entry-info-button"
									src="imgs/info.png"
									alt="info button"
								/>
							</div>
							<div className="entry">
								{/* <img src="imgs/Home-Dark.png" alt="Icon" style="width:300px;height:300px;"> */}
								<img className="one" src="imgs/shellfish.jpeg" alt="shellfish" />
								<h1 className="two">Shellfish</h1>
								<img
									className="entry-info-button"
									src="imgs/info.png"
									alt="info button"
								/>
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
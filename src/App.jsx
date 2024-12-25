// Filename - App.js

import React from "react";
import Navbar from "./components/Navbar";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import MyInfo from "./pages/myInfo";
import More from "./pages/more";
import Home from "./pages/index";
import Help from "./pages/getHelp";
import MedicalID from "./pages/medicalID";
import RestaurantID from "./pages/restaurantID";
import FoodAllergies from "./components/EditInfoPages/foodAllergyWrap";
import OtherAllergies from "./components/EditInfoPages/otherAllergyWrap";
import MedicalConditions from "./components/EditInfoPages/medCondWrap";
import OtherHealthInfo from "./components/EditInfoPages/otherHealthWrap";
import './master-styles.css'

function App() {
	return (
		<Router>
			<div id="bottom-pad"/>
			<Navbar />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/more" element={<More />} />
				<Route path="/my-info" element={<MyInfo />} />
				<Route path="/edit-food-allergies" element={<FoodAllergies />} />
				<Route path="/edit-other-allergies" element={<OtherAllergies />} />
				<Route path="/edit-med-conditions" element={<MedicalConditions />} />
				<Route path="/edit-health-info" element={<OtherHealthInfo />} />
				<Route path="/get-help" element={<Help />} />
				<Route path="/rest-id" element={<RestaurantID />} />
				<Route path="/med-id" element={<MedicalID />} />
			</Routes>
		</Router>
	);
}

export default App;

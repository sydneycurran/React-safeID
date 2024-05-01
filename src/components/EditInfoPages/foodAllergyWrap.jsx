import { React, useState } from "react";
import EditFoodInfo from "./editFoodAllergies";

var x = 0;

export default function FoodAllergies({ }) {
    const [foodAll, setFoodAll] = useState([])
	fetch("http://localHost:8000/food")
		.then(res => res.json())
		.then(json => setFoodAll(json.allergies))
    x++
    return (
        <>
            {x < 5 ? <></> : <EditFoodInfo all={foodAll} />}
            <div id="bottom-pad"/>
        </>

    )
}
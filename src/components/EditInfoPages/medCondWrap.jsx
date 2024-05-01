import { React, useState } from "react";
import EditMedicalConditions from "./editMedCond";

var x = 0;

export default function MedicalConditions() {
    x++
    const [medCond, setMedCond] = useState([])
	fetch("http://localHost:8000/medical-conditions")
		.then(res => res.json())
		.then(json => setMedCond(json.conditions))
    return (
        <>
            {x < 5 ? <></> : <EditMedicalConditions cond={medCond} />}
            <div id="bottom-pad"/>
        </>

    )
}
import { React, useState } from "react";
import EditOtherAllergies from "./editOtherAllergies";

var x = 0;

export default function OtherAllergies() {
    const [otherAll, setOtherAll] = useState([])
	fetch("http://localHost:8000/other-all")
		.then(res => res.json())
		.then(json => setOtherAll(json.allergies))
    x++
    return (
        <>
            {x < 5 ? <></> : <EditOtherAllergies all={otherAll} />}
            <div id="bottom-pad"/>
        </>

    )
}
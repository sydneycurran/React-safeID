import { React, useState } from "react";
import EditOtherHealthInfo from "./editOther";

var x = 0;

export default function OtherHealthInfo() {
    x++
    const [otherInf, setOtherInf] = useState([])
    fetch("http://localHost:8000/other-health")
        .then(res => res.json())
        .then(json => setOtherInf(json.info))
    const [meds, setMeds] = useState([])
    fetch("http://localHost:8000/medications")
        .then(res => res.json())
        .then(json => setMeds(json.meds))
    return (
        <>
            {x < 5 ? <></> : <EditOtherHealthInfo inf={otherInf} meds={meds} />}
            <div id="bottom-pad"/>
        </>

    )
}
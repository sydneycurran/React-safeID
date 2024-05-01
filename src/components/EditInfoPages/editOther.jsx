import { React } from "react";
import { updateHealthInfo } from "./edit-my-info";
import { NavLink } from "react-router-dom";

export default function EditOtherHealthInfo({ inf, meds }) {
    return (
        <>
            <link rel="stylesheet" href="master-styles.css" />
            <div className="edit-info">
                <div className="header">
                    <h1>My Info</h1>
                    <p className="user-info">Last ID update: April 3, 2024</p>
                </div>
                <div id="info-input" className="checkbox">
                    <h1 className="info-label" id="name">
                        Name
                    </h1>
                    <h3 className="info-label">Other Info</h3>
                    <input id="epipen" type="checkbox" defaultValue="EpiPen" defaultChecked={inf.includes("EpiPen")} />
                    <label htmlFor="epipen">Carries Epi-Pen</label>
                    <input id="inhaler" type="checkbox" defaultValue="Inhaler" defaultChecked={inf.includes("Inahler")} />
                    <label htmlFor="inhaler">Carries Inhaler</label>
                    <input id="insulin" type="checkbox" defaultValue="Insulin" defaultChecked={inf.includes("Insulin")} />
                    <label htmlFor="insulin">Carries Insulin</label>
                    <input id="dog" type="checkbox" defaultValue="Service Dog" defaultChecked={inf.includes("Service Dog")} />
                    <label htmlFor="dog">Service Dog</label>
                    <h3 className="info-label">Medications</h3>
                    <input id="meds" type="text" defaultValue={meds} />
                    <br />
                    <br />
                    <NavLink to="/my-info">
                        <button onClick={updateHealthInfo}>Save Other Info</button>
                    </NavLink>
                </div>
            </div>
        </>
    )

}
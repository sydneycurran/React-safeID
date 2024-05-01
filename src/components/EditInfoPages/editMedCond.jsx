import { React } from "react";
import { updateMedicalConditions } from "./edit-my-info";
import { NavLink } from "react-router-dom";

export default function EditMedicalConditions({ cond }) {
    return (
    <div>
        <link rel="stylesheet" href="master-styles.css" />
        <div className="edit-info">
            <div id="info-input" className="checkbox">
                <h1 className="info-label">
                    My Medical Conditions
                </h1>
                <h3 className="info-label">Medical Conditions</h3>
                <input id="arth" type="checkbox" defaultValue="Arthritis" defaultChecked={cond.includes("Arthritis")} />
                <label htmlFor="arth">Arthritis</label>
                <input id="asthma" type="checkbox" defaultValue="Asthma" defaultChecked={cond.includes("Asthma")} />
                <label htmlFor="asthma">Asthma</label>
                <input id="autoimmune" type="checkbox" defaultValue="Autoimmune" defaultChecked={cond.includes("Autoimmune")} />
                <label htmlFor="autoimmune">Autoimmune Disorder</label>
                <input id="diabetes" type="checkbox" defaultValue="Diabetes" defaultChecked={cond.includes("Diabetes")} />
                <label htmlFor="diabetes">Diabetes</label>
                <input id="epilep" type="checkbox" defaultValue="Epilepsy" defaultChecked={cond.includes("Epilepsy")} />
                <label htmlFor="epilep">Epilepsy</label>
                <input id="heart" type="checkbox" defaultValue="Heart" defaultChecked={cond.includes("Heart")} />
                <label htmlFor="heart">Heart Disease</label>
                <input id="hypt" type="checkbox" defaultValue="Hypertension" defaultChecked={cond.includes("Hypertension")} />
                <label htmlFor="hypt">Hypertension</label>
                <input id="ibs" type="checkbox" defaultValue="IBS" defaultChecked={cond.includes("IBS")} />
                <label htmlFor="ibs">Irritable Bowel Syndrome</label>
                <input id="kidney" type="checkbox" defaultValue="Kidney" defaultChecked={cond.includes("Kidney")} />
                <label htmlFor="kidney">Kidney Disease</label>
                <br />
                <NavLink to="/my-info">
                    <button onClick={updateMedicalConditions}>
                        Save Medical Conditions
                    </button>
                </NavLink>
            </div>
        </div>
    </div>
    )
}
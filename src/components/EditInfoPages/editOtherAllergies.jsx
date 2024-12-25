import { React } from "react";
import { updateOtherAllergies } from "./edit-my-info";
import { NavLink } from "react-router-dom";

export default function EditOtherAllergies({ all }) {
    return (
        <>
            <link rel="stylesheet" href="master-styles.css" />
            <div className="edit-info">
                <div className="phone-container">
                    <div id="info-input" className="checkbox">
                        <h3 className="info-label">Other Allergies</h3>
                        <input id="anti_all" type="checkbox" defaultValue="Antibiotics" defaultChecked={all.includes("Antibiotics")} />
                        <label htmlFor="anti_all">-Cillin Antibiotics</label>
                        <input id="bee_all" type="checkbox" defaultValue="Bees" defaultChecked={all.includes("Bees")} />
                        <label htmlFor="bee_all">Bee and Insect Stings</label>
                        <input id="latex_all" type="checkbox" defaultValue="Latex" defaultChecked={all.includes("Latex")} />
                        <label htmlFor="latex_all">Latex</label>
                        <input id="med_all" type="checkbox" defaultValue="Medications" defaultChecked={all.includes("Medications")} />
                        <label htmlFor="med_all">Other Medications</label>
                        <br />
                        <NavLink to="/my-info" activeStyle>
                            <button onClick={updateOtherAllergies}>Save Other Allergies</button>
                        </NavLink>
                    </div>
                </div>

            </div>
        </>
    )

}
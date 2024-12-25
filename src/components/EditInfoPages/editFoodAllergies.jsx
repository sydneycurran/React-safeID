import { React } from "react";
import { updateFoodAllergies } from "./edit-my-info";
import { NavLink } from "react-router-dom";

export default function EditFoodInfo({ all }) {

    return (
        <>
            <link rel="stylesheet" href="master-styles.css" />
            <div className="edit-info">
                <div id="info-input" className="checkbox">
                    <h3 className="info-label">Food Allergies</h3>
                    <input
                        className="container"
                        id="dairy_all"
                        type="checkbox"
                        defaultValue="Dairy"
                        defaultChecked={all.includes("Dairy")}
                    />
                    <label htmlFor="dairy_all">
                        Dairy
                        <span className="checkmark" />
                    </label>
                    <input
                        className="container"
                        id="egg_all"
                        type="checkbox"
                        defaultValue="Eggs"
                        defaultChecked={all.includes("Eggs")}
                    />
                    <label htmlFor="egg_all">
                        Eggs
                        <span className="checkmark" />
                    </label>
                    <input
                        className="container"
                        id="fish_all"
                        type="checkbox"
                        defaultValue="Fish"
                        defaultChecked={all.includes("Fish")}
                    />
                    <label htmlFor="fish_all">
                        Fish
                        <span className="checkmark" />
                    </label>
                    <input
                        className="container"
                        id="gluten_all"
                        type="checkbox"
                        defaultValue="Gluten"
                        defaultChecked={all.includes("Gluten")}
                    />
                    <label htmlFor="gluten_all">
                        Gluten
                        <span className="checkmark" />
                    </label>
                    <input
                        className="container"
                        id="peanut_all"
                        type="checkbox"
                        defaultValue="Peanuts"
                        defaultChecked={all.includes("Peanuts")}
                    />
                    <label htmlFor="peanut_all">
                        Peanuts
                        <span className="checkmark" />
                    </label>
                    <input
                        className="container"
                        id="ses_all"
                        type="checkbox"
                        defaultValue="Sesame"
                        defaultChecked={all.includes("Sesame")}
                    />
                    <label htmlFor="ses_all">
                        Sesame
                        <span className="checkmark" />
                    </label>
                    <input
                        className="container"
                        id="shell_all"
                        type="checkbox"
                        defaultValue="Shellfish"
                        defaultChecked={all.includes("Shellfish")}
                    />
                    <label htmlFor="shell_all">
                        Shellfish
                        <span className="checkmark" />
                    </label>
                    <input
                        className="container"
                        id="soy_all"
                        type="checkbox"
                        defaultValue="Soy"
                        defaultChecked={all.includes("Soy")}
                    />
                    <label htmlFor="soy_all">
                        Soy
                        <span className="checkmark" />
                    </label>
                    <input
                        className="container"
                        id="nut_all"
                        type="checkbox"
                        defaultValue="Nuts"
                        defaultChecked={all.includes("Nuts")}
                    />
                    <label htmlFor="nut_all">
                        Tree Nuts
                        <span className="checkmark" />
                    </label>
                    <br />
                    <NavLink to="/my-info">
                        <button onClick={updateFoodAllergies}>Save Food Allergies</button>
                    </NavLink>
                </div>
            </div>
        </>

    )
}


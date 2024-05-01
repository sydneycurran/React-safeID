let foodAllergies = [];
let otherAllergies = [];
let medications = "";
let medConditions = [];
let healthInfo = [];

export function updateFoodAllergies() {
    var y = document.getElementById("save");
    //y.style.backgroundColor = "green";

    var x = document.getElementById("dairy_all");
    if (x.checked) {
        if(!foodAllergies.includes(x.value)) {
            foodAllergies.push(x.value);
            x.setAttribute("defaultChecked", true);
        }
    } else {
        if(foodAllergies.includes(x.value)) {
            foodAllergies = foodAllergies.filter((word) => word != x.value);
        }
        x.setAttribute("defaultChecked", false);
    }

    x = document.getElementById("egg_all");
    if (x.checked) {
        if(!foodAllergies.includes(x.value)) {
            foodAllergies.push(x.value);
            x.setAttribute("defaultChecked", true);
        }
    } else {
        if(foodAllergies.includes(x.value)) {
            foodAllergies = foodAllergies.filter((word) => word != x.value);
        }
        x.setAttribute("defaultChecked", false);
    }
    
    x = document.getElementById("fish_all");
    if (x.checked) {
        if(!foodAllergies.includes(x.value)) {
            foodAllergies.push(x.value);
            x.setAttribute("defaultChecked", true);
        }
    } else {
        if(foodAllergies.includes(x.value)) {
            foodAllergies = foodAllergies.filter((word) => word != x.value);
        }
        x.setAttribute("defaultChecked", false);
    }

    x = document.getElementById("gluten_all");
    if (x.checked) {
        if(!foodAllergies.includes(x.value)) {
            foodAllergies.push(x.value);
            x.setAttribute("defaultChecked", true);
        }
    } else {
        if(foodAllergies.includes(x.value)) {
            foodAllergies = foodAllergies.filter((word) => word != x.value);
        }
        x.setAttribute("defaultChecked", false);
    }

    x = document.getElementById("peanut_all");
    if (x.checked) {
        if(!foodAllergies.includes(x.value)) {
            foodAllergies.push(x.value);
            x.setAttribute("defaultChecked", true);
        }
    } else {
        if(foodAllergies.includes(x.value)) {
            foodAllergies = foodAllergies.filter((word) => word != x.value);
        }
        x.setAttribute("defaultChecked", false);
    }
    
    x = document.getElementById("ses_all");
    if (x.checked) {
        if(!foodAllergies.includes(x.value)) {
            foodAllergies.push(x.value);
            x.setAttribute("defaultChecked", true);
        }
    } else {
        if(foodAllergies.includes(x.value)) {
            foodAllergies = foodAllergies.filter((word) => word != x.value);
        }
        x.setAttribute("defaultChecked", false);
    }

    x = document.getElementById("soy_all");
    if (x.checked) {
        if(!foodAllergies.includes(x.value)) {
            foodAllergies.push(x.value);
            x.setAttribute("defaultChecked", true);
        }
    } else {
        if(foodAllergies.includes(x.value)) {
            foodAllergies = foodAllergies.filter((word) => word != x.value);
        }
        x.setAttribute("defaultChecked", false);
    }

    x = document.getElementById("nut_all");
    if (x.checked) {
        if(!foodAllergies.includes(x.value)) {
            foodAllergies.push(x.value);
            x.setAttribute("defaultChecked", true);
        }
    } else {
        if(foodAllergies.includes(x.value)) {
            foodAllergies = foodAllergies.filter((word) => word != x.value);
        }
        x.setAttribute("defaultChecked", false);
    }
    console.log(foodAllergies);
    let data = {
        "allergies" : foodAllergies
    }
    fetch('http://localHost:8000/food',
        {
            method: 'PUT',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(json => console.log(json))
}

export function updateOtherAllergies() {
    var x = document.getElementById("anti_all");
    if (x.checked) {
        if(!otherAllergies.includes(x.value)) {
            otherAllergies.push(x.value);
            x.setAttribute("defaultChecked", true);
        }
    } else {
        if(otherAllergies.includes(x.value)) {
            otherdAllergies = otherAllergiesAllergies.filter((word) => word != x.value);
        }
        x.setAttribute("defaultChecked", false);
    }

    x = document.getElementById("bee_all");
    if (x.checked) {
        if(!otherAllergies.includes(x.value)) {
            otherAllergies.push(x.value);
            x.setAttribute("defaultChecked", true);
        }
    } else {
        if(otherAllergies.includes(x.value)) {
            otherAllergies = otherAllergies.filter((word) => word != x.value);
        }
        x.setAttribute("defaultChecked", false);
    }

    x = document.getElementById("latex_all");
    if (x.checked) {
        if(!otherAllergies.includes(x.value)) {
            otherAllergies.push(x.value);
            x.setAttribute("defaultChecked", true);
        }
    } else {
        if(otherAllergies.includes(x.value)) {
            otherAllergies = otherAllergies.filter((word) => word != x.value);
        }
        x.setAttribute("defaultChecked", false);
    }

    x = document.getElementById("med_all");
    if (x.checked) {
        if(!otherAllergies.includes(x.value)) {
            otherAllergies.push(x.value);
            x.setAttribute("defaultChecked", true);
        }
    } else {
        if(otherAllergies.includes(x.value)) {
            otherAllergies = otherAllergies.filter((word) => word != x.value);
        }
        x.setAttribute("defaultChecked", false);
    }
    console.log(otherAllergies);
    let data = {
        "allergies" : otherAllergies
    }
    fetch('http://localHost:8000/other-all',
        {
            method: 'PUT',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(json => console.log(json))
}

export function updateMedicalConditions() {
    console.log("update conditions called")
    var x = document.getElementById("arth");
    if (x.checked) {
        if(!medConditions.includes(x.value)) {
            medConditions.push(x.value);
            x.setAttribute("defaultChecked", true);
        }
    } else {
        if(medConditions.includes(x.value)) {
            medConditions = medConditions.filter((word) => word != x.value);
        }
        x.setAttribute("defaultChecked", false);
    }

    x = document.getElementById("asthma");
    if (x.checked) {
        if(!medConditions.includes(x.value)) {
            medConditions.push(x.value);
            x.setAttribute("defaultChecked", true);
        }
    } else {
        if(medConditions.includes(x.value)) {
            medConditions = medConditions.filter((word) => word != x.value);
        }
        x.setAttribute("defaultChecked", false);
    }

    x = document.getElementById("autoimmune");
    if (x.checked) {
        if(!medConditions.includes(x.value)) {
            medConditions.push(x.value);
            x.setAttribute("defaultChecked", true);
        }
    } else {
        if(medConditions.includes(x.value)) {
            medConditions = medConditions.filter((word) => word != x.value);
        }
        x.setAttribute("defaultChecked", false);
    }

    x = document.getElementById("diabetes");
    if (x.checked) {
        if(!medConditions.includes(x.value)) {
            medConditions.push(x.value);
            x.setAttribute("defaultChecked", true);
        }
    } else {
        if(medConditions.includes(x.value)) {
            medConditions = medConditions.filter((word) => word != x.value);
        }
        x.setAttribute("defaultChecked", false);
    }

    x = document.getElementById("epilep");
    if (x.checked) {
        if(!medConditions.includes(x.value)) {
            medConditions.push(x.value);
            x.setAttribute("defaultChecked", true);
        }
    } else {
        if(medConditions.includes(x.value)) {
            medConditions = medConditions.filter((word) => word != x.value);
        }
        x.setAttribute("defaultChecked", false);
    }

    x = document.getElementById("heart");
    if (x.checked) {
        if(!medConditions.includes(x.value)) {
            medConditions.push(x.value);
            x.setAttribute("defaultChecked", true);
        }
    } else {
        if(medConditions.includes(x.value)) {
            medConditions = medConditions.filter((word) => word != x.value);
        }
        x.setAttribute("defaultChecked", false);
    }

    x = document.getElementById("hypt");
    if (x.checked) {
        if(!medConditions.includes(x.value)) {
            medConditions.push(x.value);
            x.setAttribute("defaultChecked", true);
        }
    } else {
        if(medConditions.includes(x.value)) {
            medConditions = medConditions.filter((word) => word != x.value);
        }
        x.setAttribute("defaultChecked", false);
    }

    x = document.getElementById("ibs");
    if (x.checked) {
        if(!medConditions.includes(x.value)) {
            medConditions.push(x.value);
            x.setAttribute("defaultChecked", true);
        }
    } else {
        if(medConditions.includes(x.value)) {
            medConditions = medConditions.filter((word) => word != x.value);
        }
        x.setAttribute("defaultChecked", false);
    }

    x = document.getElementById("kidney");
    if (x.checked) {
        if(!medConditions.includes(x.value)) {
            medConditions.push(x.value);
            x.setAttribute("defaultChecked", true);
        }
    } else {
        if(medConditions.includes(x.value)) {
            medConditions = medConditions.filter((word) => word != x.value);
        }
        x.setAttribute("defaultChecked", false);
    }
    console.log(medConditions);
    let data = {
        "conditions" : medConditions
    }
    fetch('http://localHost:8000/medical-conditions',
        {
            method: 'PUT',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(json => console.log(json))
}

export function updateHealthInfo() {
    var x = document.getElementById("epipen");
    if (x.checked) {
        if(!healthInfo.includes(x.value)) {
            healthInfo.push(x.value);
            x.setAttribute("defaultChecked", true);
        }
    } else {
        if(healthInfo.includes(x.value)) {
            healthInfo = healthInfo.filter((word) => word != x.value);
        }
        x.setAttribute("defaultChecked", false);
    }

    x = document.getElementById("inhaler");
    if (x.checked) {
        if(!healthInfo.includes(x.value)) {
            healthInfo.push(x.value);
            x.setAttribute("defaultChecked", true);
        }
    } else {
        if(healthInfo.includes(x.value)) {
            healthInfo = healthInfo.filter((word) => word != x.value);
        }
        x.setAttribute("defaultChecked", false);
    }

    x = document.getElementById("insulin");
    if (x.checked) {
        if(!healthInfo.includes(x.value)) {
            healthInfo.push(x.value);
            x.setAttribute("defaultChecked", true);
        }
    } else {
        if(healthInfo.includes(x.value)) {
            healthInfo = healthInfo.filter((word) => word != x.value);
        }
        x.setAttribute("defaultChecked", false);
    }

    x = document.getElementById("dog");
    if (x.checked) {
        if(!healthInfo.includes(x.value)) {
            healthInfo.push(x.value);
            x.setAttribute("defaultChecked", true);
        }
    } else {
        if(healthInfo.includes(x.value)) {
            healthInfo = healthInfo.filter((word) => word != x.value);
        }
        x.setAttribute("defaultChecked", false);
    }

    x = document.getElementById("meds");
    medications = x.value;

    console.log(healthInfo);
    console.log(medications);

    let data = {
        "info" : healthInfo
    }
    fetch('http://localHost:8000/other-health',
        {
            method: 'PUT',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(json => console.log(json))
    
        data = {
            "meds" : medications
        }
        fetch('http://localHost:8000/medications',
            {
                method: 'PUT',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(json => console.log(json))
}

async function updateMyInfo() {
    updateFoodAllergies();
    updateOtherAllergies();    
    updateMedicalConditions(); 
    updateHealthInfo();

    console.log(foodAllergies);
    console.log(otherAllergies);
    console.log(medConditions);
    console.log(healthInfo);
    console.log(medications);
}

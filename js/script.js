//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

const outputAnswer = document.querySelector(".answer");

function evaluateEfterloen() {
    event.preventDefault();

    const birthYear = document.getElementById("birthyear").value;
    console.log(birthYear);

    const yearsOfMembership = document.getElementById("yearsofmembership").value;
    console.log(yearsOfMembership);

    let currentDate = new Date();

    let currentYear = currentDate.getFullYear();

    let age = currentYear - birthYear;
    console.log(age);

    const outputfirstName = document.getElementById("firstname").value;
    console.log(outputfirstName);
    const outputlastName = document.getElementById("lastname").value;
    console.log(outputlastName);

    if (age >= 60 || yearsOfMembership >= 30) {
        outputAnswer.textContent = "Kære, " + outputfirstName + " " + outputlastName + ", du er kvalificeret til efterløn.";
    } else {
        outputAnswer.textContent = "Kære, " + outputfirstName + " " + outputlastName + ", du er ikke kvalificeret til efterløn din tegning.";
    }
}

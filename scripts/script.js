"use strict";
let checkboxes = document.getElementsByName("option");
let submitButton = document.getElementById("submitbtn");
let questionContainer = document.querySelectorAll(
  ".question-two-container, .question-three-container, .question-four-container, .result-container"
);
let questionOneContainer = document.getElementById("questionOne-Container");
let questionTwoContainer = document.getElementById("questionTwo-Container");
let questionThreeContainer = document.getElementById("questionThree-Container");
let questionFourContainer = document.getElementById("questionFour-Container");
let resultContainer = document.getElementById("result-container");

questionOneContainer.style.display = "block";
questionTwoContainer.style.display = "none";
questionThreeContainer.style.display = "none";
questionFourContainer.style.display = "none";
resultContainer.style.display = "none";

function toggleCheckbox(checkbox) {
  for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].checked = false;

    if (checkboxes[i] === checkbox) {
      checkbox.checked = true;
    }
  }
}


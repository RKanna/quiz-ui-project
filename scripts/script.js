"use strict";
let checkboxes = document.getElementsByName("option");
let submitButton = document.getElementById("submitbtn");
let Reloadbtn = document.getElementById("Reloadbtn");
let questionContainer = document.querySelectorAll(
  ".question-two-container, .question-three-container, .question-four-container, .result-container"
);
let questionOneContainer = document.getElementById("questionOne-Container");
let questionTwoContainer = document.getElementById("questionTwo-Container");
let questionThreeContainer = document.getElementById("questionThree-Container");
let questionFourContainer = document.getElementById("questionFour-Container");
let resultContainer = document.getElementById("result-container");
let finalResult = document.getElementById("finalResult");
let removeBtnContainer = document.getElementById("btn-container-remove");
let addBtnContainer = document.getElementById("btnAdd");

//answers

let javascriptAnswer = document.getElementById("javascriptAnswer");
let cascadingAnswer = document.getElementById("cascadingAnswer");
let hyperTextAnswer = document.getElementById("hyperTextAnswer");
let yearAnswer = document.getElementById("yearAnswer");

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

submitButton.addEventListener("click", function () {
  for (var i = 0; i < checkboxes.length; i++) {
    console.log(checkboxes[i].checked);

    if (
      questionOneContainer.style.display === "block" &&
      checkboxes[i].checked
    ) {
      questionOneContainer.style.display = "none";
      questionTwoContainer.style.display = "block";
    } else if (
      questionTwoContainer.style.display === "block" &&
      checkboxes[i].checked
    ) {
      questionTwoContainer.style.display = "none";
      questionThreeContainer.style.display = "block";
    } else if (
      questionThreeContainer.style.display === "block" &&
      checkboxes[i].checked
    ) {
      questionThreeContainer.style.display = "none";
      questionFourContainer.style.display = "block";
    } else if (
      (questionFourContainer.style.display = "block" && checkboxes[i].checked)
    ) {
      questionFourContainer.style.display = "none";
      resultContainer.style.display = "flex";
      submitButton.classList.add("btnReload");
      Reloadbtn.classList.remove("btnReload");
    }
  }
});

let score = 0;
function checkToggle() {
  let javascriptAnswer = document.getElementById("javascriptAnswer");
  let cascadingAnswer = document.getElementById("cascadingAnswer");
  let hyperTextAnswer = document.getElementById("hyperTextAnswer");
  let yearAnswer = document.getElementById("yearAnswer");

  if (javascriptAnswer.checked) {
    score = score + 1;
  }

  if (cascadingAnswer.checked) {
    score = score + 1;
  }

  if (hyperTextAnswer.checked) {
    score = score + 1;
  }

  if (yearAnswer.checked) {
    score = score + 1;
  }

  console.log("Score:", score);
  finalResult.innerText = `You answered ${score}/4 questions correctly`;
}

function reloadFunction() {
  location.reload();
}

//inside submitbtn Event

// let score = 0;
// checkboxes[0].checked = true;
// console.log(checkboxes[3]);
// if(javascriptAnswer.value == 4){

// }

// else if ((resultContainer.style.display = "flex")) {
//   resultContainer.style.display = "flex";
//   // submitButton.classList.add("btnReload");
//   // Reloadbtn.classList.remove("btnReload");
//   removeBtnContainer.style.display = "none";
//   addBtnContainer.style.display = "block";
// }

//individual function

// function checkToggle() {
//   let score = 0;
//   let javascriptAnswer = document.getElementById("javascriptAnswer");
//   let cascadingAnswer = document.getElementById("cascadingAnswer");
//   let hyperTextAnswer = document.getElementById("hyperTextAnswer");
//   let yearAnswer = document.getElementById("yearAnswer");

//   if (javascriptAnswer.checked) {
//     console.log("Checkbox is toggled ON");
//     score = score + 1;

//   } else if (cascadingAnswer.checked) {
//     console.log("Checkbox is toggled ON");
//     score = score + 1;

//   } else if (hyperTextAnswer.checked) {
//     console.log("Checkbox is toggled ON");
//     score = score + 1;
//   } else if (yearAnswer.checked) {
//     console.log("Checkbox is toggled ON");
//     score = score + 1;
//     console.log(score);
//   } else {
//   }
// }

// submitButton.addEventListener("click", function () {
//   for (var i = 0; i < checkboxes.length; i++) {
//     console.log(checkboxes[i].checked);
//   }

//   if ((questionOneContainer.style.display = "block" && checkboxes[i].checked)) {
//     questionOneContainer.style.display = "none";
//     questionTwoContainer.style.display = "block";
//   }
// });

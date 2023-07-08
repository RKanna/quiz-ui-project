"use strict";
let checkboxes = document.getElementsByName("option");
let submitButton = document.getElementById("submitbtn");
let questionContainer = document.querySelectorAll(
  ".question-two-container, .question-three-container, .question-four-container, .result-container"
);

function toggleCheckbox(checkbox) {
  for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].checked = false;

    if (checkboxes[i] === checkbox) {
      checkbox.checked = true;
    }
  }
}

submitButton.addEventListener("click", function () {
  // Iterate over the questionContainer class names
  questionContainer.forEach(function (container) {
    container.style.display = "none";
    // Perform your desired actions for each container
    console.log(container.className);
    // Add your code logic here
  });
});

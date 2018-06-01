//On page load, disable the "done" button
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('formCompleteButton').setAttribute("disabled", "disabled");
});

//If there are any changes to the input box, enable the button.
inputName.oninput = function() {

  let nameEntered = document.getElementById("inputName").value
//Enable the button once user starts typing
//Remove current greeting message
  if (nameEntered.length > 0) {
    document.getElementById('formCompleteButton').removeAttribute("disabled");
    document.getElementById("greeting").innerHTML = "";
//If input is erased, disable button
  } else {
    document.getElementById('formCompleteButton').setAttribute("disabled", "disabled");
  }
};


//when button is clicked...
document.getElementById("formCompleteButton").onclick = function() {

//re-assign nameEntered to the value entered in input box
  let nameEntered = document.getElementById("inputName").value;

//let regex = all letters in the alphabet
  let regex = /^[A-Za-z]+$/;

//match nameEntered to the regex (returns boolean). If true, initialize greeting.
//nameEntered.length test case has to go first, otherwise won't work
  if (nameEntered.length < 3) {
    alert("That is not a valid input. Please enter your name.");
    document.getElementById('inputName').value = "";
  } else if (nameEntered.match(regex)){
    document.getElementById("greeting").innerHTML = "Hello " + nameEntered.charAt(0).toUpperCase() + nameEntered.slice(1);
  } else {
    alert("That is not a valid input. Please enter your name.");
    document.getElementById('inputName').value = "";
    return false;
  }

//upon button click, disable button until user inputs again
  document.getElementById('formCompleteButton').setAttribute("disabled", "disabled");
};

// Exercise 3-1
// ------------

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// Guidelines
// - write only one event listener
// - use a switch statement

//Grab the html tag we'll be using to add our style

const button = document.querySelector("ul");

// for button 4 we should add a jitters class

let myAnimations = function (event) {
  const buttonId = event.target.id;
  const selector = function (buttonId) {
    return document.getElementById(buttonId);
  };

  console.log(buttonId);

  switch (buttonId) {
    case "btn-1":
      selector(buttonId).style.opacity = "0";
      break;
    case "btn-2":
      selector(buttonId).style.background = "crimson";
      break;
    case "btn-3":
      selector(buttonId).style.background = "lightblue";
      break;
    case "btn-4":
      selector(buttonId).classList.add("jitters");
      break;
  }
};

// One event listener to rule them all

button.addEventListener("click", myAnimations);

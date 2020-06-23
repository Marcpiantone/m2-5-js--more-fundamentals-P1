// Exercise 3-3
// ----------

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// HINT:
// to remove the 'jitters' class, check the length of the classList.

// Target the html element to house all these buttons styles

const btnList = document.getElementById("btn-list");

// Set beforehand the color and opacity of our buttons

for (i = 1; i <= 4; i++) {
  document.getElementById(`btn-${i}`).style.opacity = "100";
  document.getElementById(`btn-${i}`).style.backgroundColor = "gold";
}

// Create the toggleColor function

const toggleColor = (buttonId, color) => {
  const selector = document.getElementById(buttonId);
  selector.style.backgroundColor =
    selector.style.backgroundColor === "gold" ? color : "gold";
};

// Here we build our switch statement

const changeButtons = (event) => {
  const buttonId = event.target.id;
  const selector = document.getElementById(buttonId);
  switch (buttonId) {
    case "btn-1":
      selector.style.opacity = selector.style.opacity === "100" ? "0" : "100";
      //   // Same as :
      //   if (selector.style.opacity === "100") {
      //     selector.style.opacity = "0";
      //   } else selector.style.opacity = "100";
      break;
    case "btn-2":
      toggleColor(buttonId, "crimson");
      break;
    case "btn-3":
      toggleColor(buttonId, "lightblue");
      break;
    case "btn-4":
      selector.classList.toggle("jitters");
      break;
    case "reset":
      document.getElementById("btn-1").style.opacity = "100";
      toggleColor("btn-2", "gold");
      toggleColor("btn-3", "gold");
      document.getElementById("btn-4").classList.remove("jitters");
  }
};

// Again, one event listener to rule them all

btnList.addEventListener("click", changeButtons);

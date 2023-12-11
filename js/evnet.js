const Body = document.body.style;

//* Option 2

function makeGreen() {
  document.body.style.backgroundColor = "lightgreen";
  document.body.style.color = "black";
}

// */ Option 3

const makeBlueButton = document.getElementById("blue-button");
makeBlueButton.onclick = blueButton;
function blueButton() {
  document.body.style.backgroundColor = "blue";
  document.body.style.color = "white";
}

//* option 3 another

const makePurple = document.getElementById("make-purple");
makePurple.onclick = function makePurpleBg() {
  document.body.style.backgroundColor = "purple";
};

//* Option 4

const makePinkButton = document.getElementById("make-pink");
makePinkButton.addEventListener("click", function MakePink() {
  document.body.style.backgroundColor = "#ff7990";
});

document
  .getElementById("make-pink")
  .addEventListener("click", function MakePink() {
    document.body.style.backgroundColor = "#ff7990";
  });

// ***OPTION 4 fINAL

document
  .getElementById("make-gray")
  .addEventListener("click", function MakeGray() {
    Body.backgroundColor = "gray";
  });

document
  .getElementById("make-goldenrod")
  .addEventListener("click", function () {
    Body.backgroundColor = "goldenrod";
  });

document.getElementById("make-darkBlue").addEventListener("click", function () {
  Body.backgroundColor = "lightBlue";
});

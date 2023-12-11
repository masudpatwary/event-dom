function eventListener() {
  const evntListener = document.getElementById("handler-stutas");
  evntListener.innerText = "Changes the event listener text";
  evntListener.style.color = "red";
  const btnColor = document.getElementById("firstBtn");
  btnColor.style.backgroundColor = "blue";
  btnColor.style.color = "white";
}

document.getElementById("onClickBtn").addEventListener("click", function () {
  const onClickChange = document.getElementById("handler-stutas");
  onClickChange.innerText = "Eto Change Menge Koia ki Hoibo";
  onClickChange.style.color = "green";
  const btnColor = document.getElementById("onClickBtn");
  btnColor.style.backgroundColor = "red";
  btnColor.style.color = "white";
});

document.getElementById("newBtnChanger").addEventListener("click", function () {
  const newChangerButtons = document.getElementById("handler-stutas");
  newChangerButtons.innerText = "Ar koto Change Korbi re Hala";
  newChangerButtons.style.color = "blue";
  const btnColor = document.getElementById("newBtnChanger");
  btnColor.style.backgroundColor = "green";
  btnColor.style.color = "white";
});

//*** */ Input Updated

document.getElementById("update-btn").addEventListener("click", function () {
  const inputFilld = document.getElementById("input-field");
  const inputText = inputFilld.value;

  const p = document.getElementById("difoult-name");
  p.innerText = inputText;
  inputFilld.value = "";
});




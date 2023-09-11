let card = document.getElementById("card");
let body = document.querySelector("body");
let pintaup = document.getElementById("pintaup");
let pintadown = document.getElementById("pintadown");
let number = document.getElementById("number");
let button = document.createElement("button");

body.style.display = "flex";
body.style.justifyContent = "center";
body.style.backgroundColor = "green";
body.style.margin = "0px";
body.style.padding = "30px";
body.style.height = "100vh";

body.appendChild(button);

card.style.height = "800px";
card.style.width = "600px";
card.style.border = "1px solid black";
card.style.backgroundColor = "white";
card.style.display = "flex";
card.style.justifyContent = "space-between";
card.style.flexDirection = "column";
card.style.padding = "25px";

//pinta arriba
pintaup.textContent = "";
pintaup.style.fontSize = "8em";
pintaup.style.textAlign = "left";

//pinta abajo
pintadown.textContent = "";
pintadown.style.fontSize = "8em";
pintadown.style.color = "";
pintadown.style.transform = "rotate(180deg)";

//number
number.innerHTML = "";
number.style.fontSize = "12em";
number.style.textAlign = "center";

//button
button.style.width = "100px";
button.style.height = "50px";
button.innerHTML = "New Card";
button.style.position = "absolute";
button.style.bottom = "200px";
button.style.right = "200px";
button.style.fontSize = "20px";

let pintas = ["♦", "♥", "♠", "♣"];

function pintaSelector() {
  let randomPinta = Math.floor(Math.random() * pintas.length);
  if (randomPinta === 1 || randomPinta === 0) {
    pintadown.style.color = "red";
    pintaup.style.color = "red";
  } else {
    pintadown.style.color = "black";
    pintaup.style.color = "black";
  }
  return pintas[randomPinta];
}

function numberSelector() {
  let result = "";
  let randomNumber = Math.ceil(Math.random() * 12);
  if (randomNumber === 1) {
    return "A";
  } else if (randomNumber === 11) {
    return "J";
  } else if (randomNumber === 12) {
    return "Q";
  } else if (randomNumber === 13) {
    return "K";
  }
  return randomNumber;
}

function newCard() {
  number.innerHTML = numberSelector();
  pintaup.textContent = pintaSelector();
  pintadown.textContent = pintaup.textContent;
}

newCard();

setInterval(() => {
  newCard();
}, 3000);

button.addEventListener("click", newCard);

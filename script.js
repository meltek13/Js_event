//Fonctionnalité 1 :

let clickerFooter = document.querySelector("footer");

let truc = clickerFooter.addEventListener("click", function () {
  console.log("clic");
});

//Fonctionnalité 1-bis :
x = 0;
clickerFooter.addEventListener("click", function () {
  x++;
  console.log("clic numero " + `${x}`);
});
//Fonctionnalité 2 :

hamburgerMenu = document.querySelector(
  "body > header > div.navbar.navbar-dark.bg-dark.box-shadow > div > button"
);
let nav = document.querySelector("#navbarHeader");

hamburgerMenu.addEventListener("click", function () {
  nav.classList.toggle("collapse");
});

//Fonctionnalité 3 :

let editButton = document.querySelector("button.btn-outline-secondary");
let textCard = document.querySelector(".card-text");

editButton.addEventListener("click", function () {
  textCard.style = "color:red";
});
//Fonctionnalité 4 :
let editButton2 = document.querySelectorAll("button.btn-outline-secondary")[1];
let textCard2 = document.querySelectorAll(".card-text")[1];

editButton2.addEventListener("click", function () {
  if (textCard2.style.color === "green") {
    textCard2.style.color = "";
  } else textCard2.style.color = "green";
});

//Fonctionnalité 5 :
let navbar = document.querySelector("header");
let link = document.querySelector("head > link");

navbar.addEventListener("dblclick", function () {
  if (
    link.href ===
    "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  ) {
    link.href = "";
  } else link.href = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
});

//Fonctionnalité 6 :

let buttonView = document.querySelectorAll("button.btn-success");
let card = document.querySelectorAll(".card-text");
let image = document.querySelectorAll("img");

for (let i = 0; i < buttonView.length; i++) {
  transformation = function () {
    if (card[i].style.display === "none") {
      card[i].style.display = "block";
    } else card[i].style.display = "none";

    if (image[i].style.width === "20%") {
      image[i].style.width = "100%";
    } else image[i].style.width = "20%";
  };

  buttonView[i].addEventListener("mouseenter", transformation);
}

//Fonctionnalité 7 :
// voir https://grafikart.fr/tutoriels/dom-774#autoplay
let buttonChangeOrder = document.querySelector(".btn-secondary");

buttonChangeOrder.addEventListener("click", function () {
  let first = document.querySelectorAll(".row")[1].firstElementChild;
  let last = document.querySelectorAll(".row")[1].lastElementChild;
  last.parentElement.insertBefore(last, first);
});

//Fonctionnalité 8:
// https://grafikart.fr/tutoriels/dom-774#autoplay
let buttonLeft = document.querySelector(".btn-primary");

buttonLeft.addEventListener("click", function (event) {
  event.preventDefault();
  let first = document.querySelector(".col-md-4");
  first.parentElement.appendChild(first);
});

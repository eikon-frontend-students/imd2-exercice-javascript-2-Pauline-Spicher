// console.log(window.innerHeight);
// console.log(document.querySelector(".boxChangeColor"));
// var boxChangeColor = document.querySelector(".change-color");

// function getBlue() {
//   boxChange - Color.classList.add("is-active");
// }

// getBlue.addEventListener("mouseenter");

// let changeColor = true;

// function change() {
//   let changeColor = document.getElementById("button");
//   if (changeColor == true) {
//     changeColor.style.backgroundColor = "yellow";
//     changeColor = false;
//   } else {
//     Button.style.backgroundColor = "blue";
//     changeColor = true;
//   }
// }

// document
//   .getElementById("box ChangeColor")
//   .addEventListener("click", function () {
//     this.style.color = "red";
//   });

// document.querySelector(".box change-color")
//   .addEventListener("click", function () {
//     this.style.backgroundColor = "blue"; // Change la couleur de fond en bleu
//   });

var element01 = document.querySelector(".box.change-color");
function changeColor() {
  element01.classList.add("is-blue");
}
element01.addEventListener("click", changeColor);

// 02

var element02 = document.querySelector(".box.toggle-color");
function toggleColor() {
  element02.classList.toggle("is-red");
}
element02.addEventListener("click", toggleColor);

// 03

var element03 = document.querySelector(".trigger");
var element04 = document.querySelector(".target");
function target() {
  element04.classList.toggle("is-disapear");
}
element03.addEventListener("click", target);

// 05

var element05 = document.querySelector(".trigger-all");
function triggerAll() {
  element01.classList.add("is-blue");
  element02.classList.add("is-red");
}
element05.addEventListener("click", triggerAll);

// 06

var element06 = document.querySelector(".trigger-all-self");
function triggerAllSelf() {
  element01.classList.add("is-blue");
  element02.classList.add("is-red");
  element06.classList.add("is-green");
}
element06.addEventListener("click", triggerAllSelf);
// var element04 = document.querySelector(".target");
// var element03 = document.querySelector(".trigger");
// function target() {
//   element03.classList.toggle("is-disapear");
// }
// element04.addEventListener("click", target);

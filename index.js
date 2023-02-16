// *BTNs
const redBg = document.getElementById("redOne");
const greenBg = document.getElementById("greenOne");
const blueBg = document.getElementById("blueOne");
const toggle = document.getElementById("toggle");
const rainbow = document.getElementById("rainbow");
const inputBorderWidth = document.getElementById("borderWidth");
const hello = document.getElementById("hello");
const customInput = document.getElementById("customInput");
const customShow = document.getElementById("customShow");
// console.log(hello, customShow, customInput);

// console.log(inputBorderWidth);
// console.log(toggle);
// console.log(rainbow);

// *Screen
const squarre = document.querySelector(".squarre");
// console.log(squarre);
// console.log(greenBg, blueBg);
// *toggle function
var indexToggle = 0;
const colorsToggle = ["white", "black"];
var colorBg;
function btnToggle() {
  // console.log("test");
  colorBg = colorsToggle[indexToggle];
  squarre.style.background = colorBg;
  indexToggle++;
  indexToggle > 1 ? (indexToggle = 0) : null;
  // console.log(colorBg);
  return colorBg;
}
// *Rainbow function
var indexRainbow = 0;
const colorsRainbow = [
  "red",
  "orange",
  "yellow",
  "green",
  "turquoise",
  "blue",
  "violet",
];
function rainbowDraw() {
  // console.log("dubble rainbow");
  colorBg = colorsRainbow[indexRainbow];
  squarre.style.background = colorBg;
  indexRainbow++;
  indexRainbow > colorsRainbow.length - 1 ? (indexRainbow = 0) : null;
  // console.log(colorBg);
  return colorBg;
}

// *color generate
function addBgColor(color) {
  switch (color) {
    case "red":
      // console.log("red");
      squarre.style.background = "red";
      colorBg = "red";
      break;
    case "green":
      // console.log("green");
      squarre.style.background = "green";
      colorBg = "green";
      break;
    case "blue":
      // console.log("blue");
      squarre.style.background = "blue";
      colorBg = "blue";
      break;
    case "toggle":
      btnToggle();
      break;
    case "rainbow":
      rainbowDraw();
      break;
    default:
      console.log("erreur");
      break;
  }
}
// *input
function inputValue() {
  // console.log("inputChange");
  // console.log(inputBorderWidth.value);
  squarre.style.borderWidth = `${inputBorderWidth.value}px`;
}
// *hello
function helloEvery() {
  // console.log("hello");
  let text = "<p>Hello World</p>";
  squarre.innerHTML += text;
}
// *custom text
function showTextContent() {
  // console.log(customInput.value);
  let text = `<p>${customInput.value}</p>`;
  squarre.innerHTML += text;
  customInput.value = "";
}
// *verif bgColor
function bgVerif(colorChange) {
  switch (colorChange) {
    case "black":
      squarre.style.color = "white";
      break;
    case "red":
      squarre.style.color = "white";
      break;
    case "green":
      squarre.style.color = "white";
      break;
    case "blue":
      squarre.style.color = "white";
      break;
    default:
      // console.log(colorChange);
      squarre.style.color = "black";
      break;
  }
}
// *Listener
redBg.addEventListener("click", () => {
  addBgColor("red");
  bgVerif(colorBg);
});
greenBg.addEventListener("click", () => {
  addBgColor("green");
  bgVerif(colorBg);
});
blueBg.addEventListener("click", () => {
  addBgColor("blue");
  bgVerif(colorBg);
});
toggle.addEventListener("click", () => {
  addBgColor("toggle");
  bgVerif(colorBg);
});
rainbow.addEventListener("click", () => {
  addBgColor("rainbow");
  // console.log(colorBg);
  bgVerif(colorBg);
});
inputBorderWidth.addEventListener("change", inputValue);
hello.addEventListener("click", helloEvery);
customShow.addEventListener("click", showTextContent);
// console.log(redBg);

// !---------------------------------------------
// *Part 2
// *
const firstFruit = document.getElementById("firstFruit");
const secFruit = document.getElementById("secondFruit");
const thirdFruit = document.getElementById("thirdFruit");

const fruits = document.querySelectorAll(".fruit");
// console.log(fruits);

const list = document.getElementById("list");
// console.log(list);
// console.log(firstFruit, secFruit, thirdFruit);
var children;
var index = 0;
var key;
var fruit;

function addFruit(fruitAdd) {
  // console.log(fruit);
  children = fruitAdd;
  key = fruitAdd + index;
  fruit = `<li id='${key}'>${children}</li>`;
  return fruit;
}
// for (let el in fruits) {
//   console.log(el);
//   // el.addEventListener("click", addFruit);
// }
fruits.forEach((e) => {
  // console.log(e);
  e.addEventListener("click", (el) => {
    // console.log(e.target.innerText);
    list.innerHTML += addFruit(el.target.innerText);
  });
});

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
// *----------------------------
// target all fruits from left list
const fruits = document.querySelectorAll(".fruit");
// target where display fruit add
const list = document.getElementById("list");
// target tot have to display
const toPay = document.getElementById("toPay");
// children = textFruit
// key = id calc
// fruit = html content
// listPackage = where calc display
// deleteBtn
// listItems = li add to list
// total = have to pay

var children, key, fruit, listPackage, deleteBtn, listItems, total;

// index = items in list
var index = 0;
// package = svg name add from fruits
var package = new Array();
// packageIndex = svg index name add from fruits
var packageIndex = new Array();
// svgItems = svg for li content
var svgItems = new Array();
// prices = prices of fruits add in
var prices = new Array();
// flag = verif if fruit already exist in list
var flag = false;
// flagIndex = if fruit already exist at right list, count fruit ++ for fruit clicked
var flagIndex = 0;
// totalCalc = display total have to pay
var totalCalc = 0;

// refresh total + display it + sup info from svgs var + (parameter : index btnClicked)
function afterBtnAddAction(indexDel) {
  // catch = calc from number of item * price of item
  let calc = packageIndex[indexDel] * prices[indexDel];
  // total dislay minus calc catch before
  totalCalc -= calc;
  // display calc
  total = `<p class='total'> Total : ${totalCalc}€<p>`;
  toPay.innerHTML = total;
  // sup info from svg call:
  // sup li in svg
  svgItems.splice(indexDel, 1);
  // sup 1 to index
  index--;
  // sup name
  package.splice(indexDel, 1);
  // sup index linked
  packageIndex.splice(indexDel, 1);
  // sup price linked
  prices.splice(indexDel, 1);
}
// display content list right added
function addContentList() {
  // reset content
  list.innerHTML = "";
  // if already add items in list
  if (svgItems.length > 0) {
    // display all content
    for (let j = 0; j < svgItems.length; j++) {
      console.log("render");
      list.innerHTML += svgItems[j].outerHTML;
    }
    return;
  }
  // if no content in list, remove all content (remove : total display, even if it's = 0)
  if (index === 0) {
    toPay.innerHTML = "";
  }
}
// delete button action  : catch all list button and li ; link listener on each; add sup listener
function deleteBtnAction() {
  deleteBtn = document.querySelectorAll("#list button");
  listItems = document.querySelectorAll("#list li");
  // add list items in svg array svgItems
  for (let i = 0; i < listItems.length; i++) {
    svgItems[i] = listItems[i];
  }
  // add listener on each btn X added with item in li
  for (let k = 0; k < listItems.length; k++) {
    deleteBtn[k].addEventListener("click", () => {
      // sup li
      afterBtnAddAction(k);
      // display new content
      addContentList();
      // add sup listener
      return deleteBtnAction();
    });
  }
}
// already exist ? (e = fruit)
function verifExist(e) {
  // catch all content added to list if 1+ have been add before
  if (index > 0) {
    listPackage = document.querySelectorAll("span");
  }
  // children is now fruit clicked
  children = e;
  // when children exist in our list -> flag = true AND flagIndex = localisation of children in package
  for (let i = 0; i < package.length; i++) {
    if (package[i] === children) {
      flag = true;
      flagIndex = i;
    }
  }
}
// when flag = true do it; catch contents from svg arrays; display it on list
function fruitExistAlready() {
  packageIndex[flagIndex] = packageIndex[flagIndex] + 1;
  listPackage[flagIndex].textContent = "";
  // reset flag
  flag = false;
  // add price in total
  totalCalc += prices[flagIndex];
  // display it
  total = `<p class='total'> Total : ${totalCalc}€<p>`;
  toPay.innerHTML = total;
  // refresh content fruit added
  let calc = packageIndex[flagIndex] * prices[flagIndex];

  return (listPackage[flagIndex].textContent =
    " " +
    packageIndex[flagIndex] +
    " x " +
    prices[flagIndex] +
    "€ = " +
    calc +
    "€.");
}
// add new fruit (price added)
function fruitFirstAppear(actualPrice) {
  // add fruit in array
  package.push(children);
  // add the first data in children number
  packageIndex.push(1);
  // add li in fruit
  fruit = `<li>${children}<span id='${key}'> 1 x ${actualPrice}€ = ${actualPrice}€</span> <button>X</button></li>`;
  // list has one more fruit
  index++;
  // add content
  list.innerHTML += fruit;
  // add price in same index to fruit
  prices.push(actualPrice);
  // add delete listener
  deleteBtnAction();
  // display tot;
  let calc = packageIndex[index - 1] * prices[index - 1];
  totalCalc += calc;
  total = `<p class='total'> Total : ${totalCalc}€<p>`;
  toPay.innerHTML = total;
}
// add fruit and price
function addFruit(fruitAdd, price) {
  // verif if exist
  verifExist(fruitAdd);
  // id is now = name of fruit
  key = fruitAdd;
  // fruit already exist?
  if (flag == true) {
    // refresh content of fruit
    fruitExistAlready();
    return;
  }
  // add fruit on right list if doesn't exist with price
  fruitFirstAppear(price);
  return;
}
// at the beginning of the script
function start() {
  // for each fruit
  fruits.forEach((fruit) => {
    // add listener
    fruit.addEventListener("click", (el) => {
      // catch name clicked and insert in array byt split for all space
      let nameTarget = el.target.innerText.split(" ");
      // catch the last index of nameTarget to catch the price display
      let parcelsFruit = nameTarget.length - 1;
      // remove it
      nameTarget.splice(parcelsFruit, 1);
      // join the name
      let article = nameTarget.join(" ");
      // link on click with addFruit function
      addFruit(article, el.target.value);
    });
  });
}
// set th logic
start();

// !-------------------
// TODO:
// * add listerner on click btn supr
// !-----------------
// !Trash:
// *---------------------------
// *btn delete in listener
// *---------------------------
// let calc = packageIndex[k] * prices[k];
// totalCalc -= calc;
// total = `<p class='total'> Total : ${totalCalc}€<p>`;
// toPay.innerHTML = total;
// svgItems.splice(k, 1);
// // *Need reset all info
// index--;
// package.splice(k, 1);
// packageIndex.splice(k, 1);
// prices.splice(k, 1);
// *-----------------------------------
// *Part 2
// *-------------------------
// list.innerHTML = "";
// if (svgItems.length > 0) {
//   for (let j = 0; j < svgItems.length; j++) {
//     console.log("render");
//     list.innerHTML += svgItems[j].outerHTML;
//   }
//   return deleteBtnAction();
// }
// if (index === 0) {
//   toPay.innerHTML = "";
// }
// *--------------------------
// *if flag = true
// packageIndex[flagIndex] = packageIndex[flagIndex] + 1;
// listPackage[flagIndex].textContent = "";
// flag = false;

// totalCalc += prices[flagIndex];
// total = `<p class='total'> Total : ${totalCalc}€<p>`;
// toPay.innerHTML = total;
// *------------------------------
// *add fruit
// package.push(children);
// packageIndex.push(1);
// // console.log(packageIndex);
// fruit = `<li>${children}<span id='${key}'> 1 x ${price}€ = ${price}€</span> <button>X</button></li>`;
// index++;
// list.innerHTML += fruit;
// // console.log(price);
// prices.push(price);
// deleteBtnAction();
// let calc = packageIndex[index - 1] * prices[index - 1];
// // console.log(calc);
// totalCalc += calc;
// total = `<p class='total'> Total : ${totalCalc}€<p>`;
// toPay.innerHTML = total;
// *-----------------------------------
// *not use:
// firstline
// const firstFruit = document.getElementById("firstFruit");
// const secFruit = document.getElementById("secondFruit");
// const thirdFruit = document.getElementById("thirdFruit");
// var   listPackageBtn;

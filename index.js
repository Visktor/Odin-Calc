const clearDisplay = document.querySelector(".clear");
const del = document.querySelector(".delete");
const display = document.querySelector(".displaycontent");
const num1 = document.querySelector(".number1");
const num2 = document.querySelector(".number2");
const num3 = document.querySelector(".number3");
const num4 = document.querySelector(".number4");
const num5 = document.querySelector(".number5");
const num6 = document.querySelector(".number6");
const num7 = document.querySelector(".number7");
const num8 = document.querySelector(".number8");
const num9 = document.querySelector(".number9");
const sAdd = document.querySelector(".add");
const sSub = document.querySelector(".subtract");
const sDiv = document.querySelector(".divide");
const sMult = document.querySelector(".multiply");
const sComma = document.querySelector(".comma");
const sPercent = document.querySelector(".percentage");
const sEqual = document.querySelector(".equal");
const warning = document.querySelector(".warning");
const lastValue = document.querySelector(".lastValue");

let myExpression = [];
let myOperand = [];
let expLength;

num1.addEventListener("click", () => {
  display.textContent += 1;
  warning.textContent = "";
});
num2.addEventListener("click", () => {
  display.textContent += 2;
  warning.textContent = "";
});
num3.addEventListener("click", () => {
  display.textContent += 3;
  warning.textContent = "";
});
num4.addEventListener("click", () => {
  display.textContent += 4;
  warning.textContent = "";
});
num5.addEventListener("click", () => {
  display.textContent += 5;
  warning.textContent = "";
});
num6.addEventListener("click", () => {
  display.textContent += 6;
  warning.textContent = "";
});
num7.addEventListener("click", () => {
  display.textContent += 7;
  warning.textContent = "";
});
num8.addEventListener("click", () => {
  display.textContent += 8;
  warning.textContent = "";
});
num9.addEventListener("click", () => {
  display.textContent += 9;
  warning.textContent = "";
});
sAdd.addEventListener("click", () => {
  checkLast();
  display.textContent += "+";
  checkFirst();
  if(checkFirst === false){
    myExpression.push()
  }
});
sSub.addEventListener("click", () => {
  checkLast();
  display.textContent += "-";
  checkFirst();
});
sDiv.addEventListener("click", () => {
  checkLast();
  display.textContent += "/";
  checkFirst();
});
sMult.addEventListener("click", () => {
  checkLast();
  display.textContent += "×";
  checkFirst();
});
sComma.addEventListener("click", () => {
  checkLast();
  display.textContent += ".";
  checkFirst();
});
sPercent.addEventListener("click", () => {
  checkLast();
  display.textContent += "%";
  checkFirst();
});
sEqual.addEventListener("click", () => {
  myExpression = display.textContent;
});
del.addEventListener("click", () => {
  display.textContent = display.textContent.substring(
    0,
    display.textContent.length - 1
  );
});
clearDisplay.addEventListener("click", clearD);

function clearD() {
  display.textContent = "";
}

function test() {
  console.log(myExpression[2]);
}

function separator() {
  display.textContent;
}

function checkLast() {
  let lastChar = display.textContent.length - 1;
  console.log(display.textContent[lastChar]);

  if (
    display.textContent[lastChar] === "+" ||
    display.textContent[lastChar] === "-" ||
    display.textContent[lastChar] === "/" ||
    display.textContent[lastChar] === "×" ||
    display.textContent[lastChar] === "." ||
    display.textContent[lastChar] === "%"
  ) {
    display.textContent = display.textContent.substring(0, lastChar);
    warning.textContent = "Invalid input. Operation missing a value.";
  }
}

function checkFirst() {
  if (
    display.textContent[0] === "+" ||
    display.textContent[0] === "-" ||
    display.textContent[0] === "/" ||
    display.textContent[0] === "×" ||
    display.textContent[0] === "." ||
    display.textContent[0] === "%"
  ) {
    display.textContent = "";
    warning.textContent = "First character can't be an operand.";
    return true;
  }
}

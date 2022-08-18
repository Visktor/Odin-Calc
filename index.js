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

clearDisplay.addEventListener("click", clearD);
let myExpression = display.textContent;

num1.addEventListener("click", () => {
  display.textContent += 1;
  myExpression = display.textContent;
});
num2.addEventListener("click", () => {
  display.textContent += 2;
  myExpression = display.textContent;
});
num3.addEventListener("click", () => {
  display.textContent += 3;
  myExpression = display.textContent;
});
num4.addEventListener("click", () => {
  display.textContent += 4;
  myExpression = display.textContent;
});
num5.addEventListener("click", () => {
  display.textContent += 5;
  myExpression = display.textContent;
});
num6.addEventListener("click", () => {
  display.textContent += 6;
  myExpression = display.textContent;
});
num7.addEventListener("click", () => {
  display.textContent += 7;
  myExpression = display.textContent;
});
num8.addEventListener("click", () => {
  display.textContent += 8;
  myExpression = display.textContent;
});
num9.addEventListener("click", () => {
  display.textContent += 9;
  myExpression = display.textContent;
});
sAdd.addEventListener("click", () => {
  display.textContent += "+";
  myExpression = display.textContent;
});
sSub.addEventListener("click", () => {
  display.textContent += "-";
  myExpression = display.textContent;
});
sDiv.addEventListener("click", () => {
  display.textContent += "÷";
  myExpression = display.textContent;
});
sMult.addEventListener("click", () => {
  display.textContent += "×";
  myExpression = display.textContent;
});
sComma.addEventListener("click", () => {
  display.textContent += ".";
  myExpression = display.textContent;
});
sPercent.addEventListener("click", () => {
  display.textContent += "%";
  myExpression = display.textContent;
});
sEqual.addEventListener("click", () => {
  display.textContent = operate();
  myExpression = display.textContent;
});
del.addEventListener("click", () => {
  display.textContent = display.textContent.substring(
    0,
    display.textContent.length - 1
  );
  myExpression = display.textContent;
});

function clearD() {
  display.textContent = "";
  myExpression = display.textContent;
}

function test(){
    console.log(myExpression);
}
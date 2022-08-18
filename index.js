const clearDisplay = document.querySelector(".clear");
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

clearDisplay.addEventListener("click", clearD);

num1.addEventListener("click", () => {
  display.textContent += 1;
});

num2.addEventListener("click", () => {
  display.textContent += 2;
});
num3.addEventListener("click", () => {
  display.textContent += 3;
});
num4.addEventListener("click", () => {
  display.textContent += 4;
});
num5.addEventListener("click", () => {
  display.textContent += 5;
});
num6.addEventListener("click", () => {
  display.textContent += 6;
});
num7.addEventListener("click", () => {
  display.textContent += 7;
});
num8.addEventListener("click", () => {
  display.textContent += 8;
});
num9.addEventListener("click", () => {
  display.textContent += 9;
});

function clearD() {
  display.textContent = "";
}

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
let currentResult;
let invalid = false;
let currentExp = 0;
let currentOp = -1;

num1.addEventListener("click", () => {
  display.textContent += 1;
  if (!myExpression[currentExp]) {
    myExpression.push("1");
  } else {
    myExpression[currentExp] += "1";
  }
  warning.textContent = "";
  invalid = false;
  operate();
  lastValue.textContent = currentResult;
});

num2.addEventListener("click", () => {
  display.textContent += 2;
  if (!myExpression[currentExp]) {
    myExpression.push("2");
  } else {
    myExpression[currentExp] += "2";
  }
  warning.textContent = "";
  invalid = false;
  operate();
  lastValue.textContent = currentResult;
});

num3.addEventListener("click", () => {
  display.textContent += 3;
  if (!myExpression[currentExp]) {
    myExpression.push("3");
  } else {
    myExpression[currentExp] += "3";
  }
  warning.textContent = "";
  invalid = false;
  operate();
  lastValue.textContent = currentResult;
});

num4.addEventListener("click", () => {
  display.textContent += 4;
  if (!myExpression[currentExp]) {
    myExpression.push("4");
  } else {
    myExpression[currentExp] += "4";
  }
  warning.textContent = "";
  invalid = false;
  operate();
  lastValue.textContent = currentResult;
});

num5.addEventListener("click", () => {
  display.textContent += 5;
  if (!myExpression[currentExp]) {
    myExpression.push("5");
  } else {
    myExpression[currentExp] += "5";
  }
  warning.textContent = "";
  invalid = false;
  operate();
  lastValue.textContent = currentResult;
});

num6.addEventListener("click", () => {
  display.textContent += 6;
  if (!myExpression[currentExp]) {
    myExpression.push("6");
  } else {
    myExpression[currentExp] += "6";
  }
  warning.textContent = "";
  invalid = false;
  operate();
  lastValue.textContent = currentResult;
});

num7.addEventListener("click", () => {
  display.textContent += 7;
  if (!myExpression[currentExp]) {
    myExpression.push("7");
  } else {
    myExpression[currentExp] += "7";
  }
  warning.textContent = "";
  invalid = false;
  operate();
  lastValue.textContent = currentResult;
});

num8.addEventListener("click", () => {
  display.textContent += 8;
  if (!myExpression[currentExp]) {
    myExpression.push("8");
  } else {
    myExpression[currentExp] += "8";
  }
  warning.textContent = "";
  invalid = false;
  operate();
  lastValue.textContent = currentResult;
});

num9.addEventListener("click", () => {
  display.textContent += 9;
  if (!myExpression[currentExp]) {
    myExpression.push("9");
  } else {
    myExpression[currentExp] += "9";
  }
  warning.textContent = "";
  invalid = false;
  operate();
  lastValue.textContent = currentResult;
});

sAdd.addEventListener("click", () => {
  checkLast();
  display.textContent += "+";
  checkFirst();
  if (invalid === false) {
    myOperand.push("+");
    currentExp += 1;
  } else {
    myOperand.pop();
    myOperand.push("+");
  }
});

sSub.addEventListener("click", () => {
  checkLast();
  display.textContent += "-";
  checkFirst();
  if (invalid === false) {
    myOperand.push("-");
    currentExp += 1;
    console.log(currentExp);
  } else {
    myOperand.pop();
    myOperand.push("-");
  }
});

sDiv.addEventListener("click", () => {
  checkLast();
  display.textContent += "/";
  checkFirst();
  if (invalid === false) {
    myOperand.push("/");
    currentExp += 1;
  } else {
    myOperand.pop();
    myOperand.push("/");
  }
});

sMult.addEventListener("click", () => {
  checkLast();
  display.textContent += "×";
  checkFirst();
  if (invalid === false) {
    myOperand.push("×");
    currentExp += 1;
  } else {
    myOperand.pop();
    myOperand.push("×");
  }
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
  if (invalid === false) {
    myOperand.push("%");
    currentExp += 1;
  } else {
    myOperand.pop();
    myOperand.push("%");
  }
});

sEqual.addEventListener("click", () => {
  display.textContent = lastValue.textContent;
  lastValue.textContent = "";
  myExpression = [display.textContent];
  myOperand = [];
  currentExp = 0;
  currentOp = -1;
  currentResult = undefined;
});

del.addEventListener("click", fDel);
clearDisplay.addEventListener("click", clearD);

function clearD() {
  display.textContent = "";
  lastValue.textContent = undefined;
  myExpression = [];
  myOperand = [];
  currentExp = 0;
  currentOp = -1;
  currentResult = undefined;
}

function checkLast() {
  let lastChar = display.textContent.length - 1;
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
    invalid = true;
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
    invalid = true;
  }
}

function operate() {
  currentOp = -1;
  if (myExpression[1]) {
    // there are at least two values to operate
    currentResult = myExpression.reduce((a, b) => {
      if (b === myExpression[0]) {
        return a + Number(b); /* the first number of the array must 
      always be added to 0, otherwise we would break our expression */
      } else {
        currentOp += 1;
        if (myOperand[currentOp] === "+") {
          return Number(a) + Number(b);
        }
        if (myOperand[currentOp] === "-") {
          return Number(a) - Number(b);
        }
        if (myOperand[currentOp] === "×") {
          return Number(a) * Number(b);
        }
        if (myOperand[currentOp] === "/") {
          return Number(a) / Number(b);
        }
        if (myOperand[currentOp] === "%") {
          return (Number(a) / 100) * Number(b);
        }
      }
    }, 0);
    lastValue.textContent = currentResult;
  } else {
    lastValue.textContent = "";
  }
}

function fDel() {
  let erased = display.textContent.slice(display.textContent.length - 1);
  // erased is assigned the character that is to be removed.
  if (erased.match(/[0-9]/)) {
    //it's a number then:
    let nItem = myExpression.pop();
    //gets the last element of myExpression array.
    if (nItem.length > 1) {
      // element contains more than one character:
      myExpression.push(nItem.substring(0, nItem.length - 1));
      operate();
    } else {
      operate();
    } /* pushes back the string we extracted (without it's last character)
    into the last array Index. Note we don't need an else statement 'cause
    if we don't execute this action, the element will just be removed 
    for good. */
  } else {
    //if it's not a number just remove last myOperand element.
    myOperand.pop();
    currentExp -= 1;
    operate();
  }
  //this part is just removing the character from the display string.
  display.textContent = display.textContent.substring(
    0,
    display.textContent.length - 1
  );
}

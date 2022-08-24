const clearDisplay = document.querySelector(".clear");
const del = document.querySelector(".delete");
const display = document.querySelector(".displaycontent");
const numbContainer = document.querySelectorAll(
  ".numbers-container > .nbutton"
);
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
/* The invalid variable tells us when the user's done something wrong.
 For further clarity on the invalid state, see checkFirst() and
 checkLast() functions */
let currentExp = 0;
let currentOp = -1;
//These two are simply Index counters for our two arrays

numbContainer.forEach((num) => {
  num.addEventListener("click", function clickNumber() {
    //loop over all numbers and add click events
    invalid = false;
    warning.textContent = "";
    if (!myExpression[currentExp]) {
      myExpression.push(num.textContent);
      display.textContent += num.textContent;
      //We make an array element, in case it doesn't exist
    } else {
      checkDecimal();
      myExpression[currentExp] += num.textContent;
      display.textContent += num.textContent;
    }
    operate();
  });
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

function checkDecimal() {
  if (
    // check if the user is trying to input more than 1 decimal point
    myExpression[currentExp].includes(".") &&
    myExpression[currentExp].length > 2
  ) {
    let dotIndex = myExpression[currentExp].indexOf(".");
    console.log(dotIndex);
    let decimalNumbers = myExpression[currentExp].slice(dotIndex);
    console.log(decimalNumbers);
    if (decimalNumbers.length > 1) {
      fDel();
      warning.textContent = "Only possible to compute one decimal point";
    } //if they are, delete the last character
    console.log(myExpression);
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
        console.log(currentOp)
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

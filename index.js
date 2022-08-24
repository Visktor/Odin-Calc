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
const sDot = document.querySelector(".comma");
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
  display.textContent += " + ";
  checkFirst();
  if (invalid === false) {
    myOperand.push("+");
    currentExp += 1;
  } else {
    console.log("OOPS");
    myOperand.pop();
    myOperand.push("+");
  }
});

/* Depending whether we have valid or invalid input, we'll either just
  push our operand into the array or replace the last array element.
  This pattern will repeat itself throughout all of our click events
  since we don't want to give the user the ability to break our 
  expression */

sSub.addEventListener("click", () => {
  checkLast();
  display.textContent += " - ";
  checkFirst();
  if (invalid === false) {
    myOperand.push("-");
    currentExp += 1;
  } else {
    console.log("OOPS");
    myOperand.pop();
    myOperand.push("-");
  }
});

sDiv.addEventListener("click", () => {
  checkLast();
  display.textContent += " / ";
  checkFirst();
  if (invalid === false) {
    myOperand.push("/");
    currentExp += 1;
  } else {
    console.log("OOPS");
    myOperand.pop();
    myOperand.push("/");
  }
});

sMult.addEventListener("click", () => {
  checkLast();
  display.textContent += " × ";
  checkFirst();
  if (invalid === false) {
    myOperand.push("×");
    currentExp += 1;
  } else {
    console.log("OOPS");
    myOperand.pop();
    myOperand.push("×");
  }
});

sDot.addEventListener("click", () => {
  if (
    display.textContent[display.textContent.length - 1] === undefined ||
    display.textContent[display.textContent.length - 1].match(/[^.0-9]/)
  ) {
    //if the last character was not a number or there's no last character.
    display.textContent += "0.";
    myExpression.push("0.");
  } else if (display.textContent[display.textContent.length - 1] != ".") {
    display.textContent += ".";
    myExpression[currentExp] += ".";
  } else if (display.textContent[display.textContent.length - 1] === ".") {
    warning.textContent = "Must add decimal value to continue";
  }
});

sPercent.addEventListener("click", () => {
  checkLast();
  display.textContent += " % ";
  checkFirst();
  if (invalid === false) {
    myOperand.push("%");
    currentExp += 1;
  } else {
    console.log("OOPS");
    myOperand.pop();
    myOperand.push("%");
  }
});

sEqual.addEventListener("click", () => {
  if (display.textContent[display.textContent.length - 1].match(/[0-9]/)) {
    display.textContent = lastValue.textContent;
    lastValue.textContent = "";
    myExpression = [display.textContent];
    myOperand = [];
    currentExp = 0;
    currentOp = -1;
    currentResult = undefined;
  } else {
    warning.textContent = "Error. last value can't be an operand.";
  }
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
  warning.textContent = "";
}

function checkLast() {
  let lastCharIndex = display.textContent.length - 1;
  if (
    display.textContent[lastCharIndex] != undefined &&
    display.textContent[lastCharIndex].match(/[^\.0-9]/)
  ) {
    display.textContent = display.textContent.substring(0, lastCharIndex - 2);
    warning.textContent = "Insert a numeric value to continue";
    invalid = true;
  }
  if (display.textContent[lastCharIndex] === ".") {
    display.textContent = display.textContent.substring(0, lastCharIndex);
    warning.textContent = "Can't compute empty decimal values";
    myExpression[currentExp] = myExpression[currentExp].substring(
      0,
      myExpression[currentExp].length - 1
    ); /* This is necessary because we don't want the user to just
    add a dot at the end of a number without a decimal number afterwards */
  }
}

function checkFirst() {
  if (
    display.textContent != undefined &&
    display.textContent[0].match(/[^\.0-9]/)
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
    let decimalNumbers = myExpression[currentExp].slice(dotIndex);
    if (decimalNumbers.length > 1) {
      fDel();
      warning.textContent = "Only possible to compute one decimal point";
    } //if they are, delete the last character
  }
}

function operate() {
  // This function updates the final result and shows it on screen
  currentOp = -2;
  if (myExpression[1]) {
    // there are at least two values to operate
    currentResult = myExpression.reduce((a, b) => {
      if (currentOp === -2) {
        currentOp += 1;
        return a + Number(b);
        /* the first number of the array must 
      always be added to 0, disregarding any operator beside it
      otherwise we would break our expression */
      } else {
        currentOp += 1;
        console.table(a, myOperand[currentOp], b);
        if (myOperand[currentOp] === "+") {
          return Number(a) + Number(b);
        }
        if (myOperand[currentOp] === "-") {
          return Number(a) - Number(b);
        }
        if (myOperand[currentOp] === "×") {
          return Number(a) * Number(b);
        }
        if (myOperand[currentOp] === "/" && Number(b) != 0) {
          return Number(a) / Number(b);
        }
        if (myOperand[currentOp] === "%") {
          return (Number(a) / 100) * Number(b);
        }
      }
    }, 0);
    currentResult = Math.trunc(currentResult * 10) / 10; // At most one floating point
    lastValue.textContent = currentResult;
  } else {
    lastValue.textContent = "";
  }
}

function fDel() {
  let erased = display.textContent.slice(display.textContent.length - 1);
  // erased is assigned the character that is to be removed
  if (erased.match(/[\.0-9]/)) {
    let nItem = myExpression.pop();
    if (nItem.length > 1) {
      myExpression.push(nItem.substring(0, nItem.length - 1));
      /* pushes back the string we extracted (without it's last character)
    into the last array Index */
      display.textContent = display.textContent.substring(
        0,
        display.textContent.length - 1
      );
      operate();
    } else {
      /* if it's the only character on current myExpression element, we
      don't push it back, removing the element itself. Otherwise, we'd
      be creating an empty element, which might cause problems */
      operate();
      display.textContent = display.textContent.substring(
        0,
        display.textContent.length - 1
      );
    }
  } else {
    //if it's not a number or dot then it's obviously an operand
    //we need to remove the last operand and go back one Expression index
    myOperand.pop();
    currentExp -= 1;
    operate();
    display.textContent = display.textContent.substring(
      0,
      display.textContent.length - 3
    );
  }
  /* this part is just removing the character from the display string, 
  which must be done unconditionally */
}

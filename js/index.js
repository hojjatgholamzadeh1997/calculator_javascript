const display = document.getElementById("display");
let result = "";

// Clear Display
function clearDisplay() {
  display.innerHTML = "0";
  result = "";
}

// Operation Handler
function operationHandler(input) {
  if (input === "0" && display.innerHTML === "0") return;

  let operator = "";
  let ponit = "";
  if (input === " + " || input === " - " || input === " * " || input === " / ") operator = input;
  if (input === ".") ponit = input;

  // Operator Buttons
  if (input === operator) {
    if (display.innerHTML === "0") return;
    if (display.innerHTML.slice(-2, -1) === operator.slice(-2, -1)) return;
    if (display.innerHTML.slice(-2, -1) === "+" || display.innerHTML.slice(-2, -1) === "-" || display.innerHTML.slice(-2, -1) === "×" || display.innerHTML.slice(-2, -1) === "÷") {
      result = result.slice(0, -3);
      display.innerHTML =  display.innerHTML.slice(0, -3);
    }
  }

  // Point Button
  if (input === ponit) {
    if (display.innerHTML.slice(-1) === ponit) return;
    if (display.innerHTML === "0") {
      display.innerHTML += ponit;
      result += "0" + ponit;
      return;
    }
    if (display.innerHTML.slice(-2, -1) === "+" || display.innerHTML.slice(-2, -1) === "-" || display.innerHTML.slice(-2, -1) === "×" || display.innerHTML.slice(-2, -1) === "÷") {
      display.innerHTML += "0" + ponit;
      result += "0" + ponit;
      return;
    }
  }

  if (display.innerHTML === "0") display.innerHTML = "";

  result += input;

  // Converting Characters (× & ÷)
  switch (input) {
    case " * ":
      input = " × ";
      break;
    case " / ":
      input = " ÷ ";
      break;
  }
  display.innerHTML += input;
}

// Calculate
function calculate() {
  if (display.innerHTML === "0") return;
  if (display.innerHTML.slice(-2, -1) === "+" || display.innerHTML.slice(-2, -1) === "-" || display.innerHTML.slice(-2, -1) === "×" || display.innerHTML.slice(-2, -1) === "÷") {
    result = result.slice(0, -3);
    display.innerHTML =  display.innerHTML.slice(0, -3);
  }
  
  result = Number(eval(result).toFixed(100));
  
  display.innerHTML = result;
}

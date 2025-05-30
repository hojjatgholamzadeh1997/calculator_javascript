const display = document.getElementById("display");
let result = "";

// Clear Display
function clearDisplay() {
  display.innerHTML = "0";
  result = "";
}

// Operation Handler
function operationHandler(input) {
  if (display.innerHTML === "0") display.innerHTML = "";

  let operator = "";
  let ponit = "";
  if (input === " + " || input === " - " || input === " × " || input === " ÷ ") operator = input;
  if (input === ".") ponit = input;

  // Operator Buttons
  if (input === operator) {
    if (display.innerHTML === "") return;
    if (display.innerHTML.slice(-2, -1) === operator.slice(-2, -1)) return;
    if (
      display.innerHTML.slice(-2, -1).includes("+") ||
      display.innerHTML.slice(-2, -1).includes("-") ||
      display.innerHTML.slice(-2, -1).includes("×") ||
      display.innerHTML.slice(-2, -1).includes("÷")
    ) {
      display.innerHTML = display.innerHTML.replace(display.innerHTML.slice(-2, -1), "");
      result = display.innerHTML.replace(display.innerHTML.slice(-2, -1), "");
    }
  }

  // Point Button
  if (input === ponit) {
    if (display.innerHTML.slice(-1) === ponit) return;
    if (display.innerHTML === "") {
      display.innerHTML += "0" + ponit;
      result += "0" + ponit;
      return;
    }
    if (display.innerHTML.slice(-2, -1) === "+" || display.innerHTML.slice(-2, -1) === "-" || display.innerHTML.slice(-2, -1) === "×" || display.innerHTML.slice(-2, -1) === "÷") {
      display.innerHTML += "0" + ponit;
      result += "0" + ponit;
      return;
    }
  }

  display.innerHTML += input;

  // Converting Characters (× & ÷)
  switch (input) {
    case " × ":
      input = " * ";
      break;
    case " ÷ ":
      input = " / ";
      break;
  }

  result += input;
}

// Calculate
function calculate() {
  if (display.innerHTML === "0" || display.innerHTML.slice(-2, -1) === "+" || display.innerHTML.slice(-2, -1) === "-" || display.innerHTML.slice(-2, -1) === "×" || display.innerHTML.slice(-2, -1) === "÷") return;

  display.innerHTML = eval(result);
  result = eval(result);
}

// Function to perform addition
function add(num1, num2) {
  return num1 + num2;
}

// Function to perform subtraction
function sub(num1, num2) {
  return num1 - num2;
}

// Function to perform multiplication
function mul(num1, num2) {
  return num1 * num2;
}

// Function to perform division
function div(num1, num2) {
  // Check if division by zero
  if (num2 === 0) {
    return "Error: Division by zero";
  }
  return num1 / num2;
}

// Main function to take input and perform calculations
function calculate() {
  var num1 = parseFloat(prompt("Enter first number:"));
  var num2 = parseFloat(prompt("Enter second number:"));
  var operator = prompt("Choose an operation: (+, -, *, /)");

  var result;
  switch (operator) {
    case "+":
      result = add(num1, num2);
      break;
    case "-":
      result = sub(num1, num2);
      break;
    case "*":
      result = mul(num1, num2);
      break;
    case "/":
      result = div(num1, num2);
      break;
    default:
      result = "Invalid operator";
  }

  alert("Result: " + result);
}

// Call the calculate function to start the calculator
calculate();

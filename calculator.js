
let num1 = parseFloat(prompt("Enter first number:"));
let num2 = parseFloat(prompt("Enter second number:"));
let operator = prompt("Enter operator (+, -, *):");

let result;

switch (operator) {
    case "+":
        result = num1 + num2;
        console.log("Addition: " + result);
        break;

    case "-":
        result = num1 - num2;
        console.log("Subtraction: " + result);
        break;

    case "*":
        result = num1 * num2;
        console.log("Multiplication: " + result);
        break;

    default:
        console.log("Invalid operator");
}

alert("Result: " + result);

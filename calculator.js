// JavaScript Calculator using Switch Case (Node.js Version)

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter first number: ", function(num1) {
    rl.question("Enter second number: ", function(num2) {
        rl.question("Enter operator (+, -, *): ", function(operator) {

            num1 = parseFloat(num1);
            num2 = parseFloat(num2);
            let result;

            switch(operator) {
                case "+":
                    result = num1 + num2;
                    console.log("Addition = " + result);
                    break;

                case "-":
                    result = num1 - num2;
                    console.log("Subtraction = " + result);
                    break;

                case "*":
                    result = num1 * num2;
                    console.log("Multiplication = " + result);
                    break;

                default:
                    console.log("Invalid Operator");
            }

            rl.close();
        });
    });
});

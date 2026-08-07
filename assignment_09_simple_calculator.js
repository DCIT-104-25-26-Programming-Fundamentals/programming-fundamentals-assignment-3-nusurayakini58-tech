// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 9
// =============================================================================
//
// TASK: Console-Based Simple Calculator
//
// Build a calculator program that runs in the console and performs basic
// arithmetic operations based on the user's input.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_09_simple_calculator.js
//
// -----------------------------------------------------------------------------
// OPERATIONS YOUR CALCULATOR MUST SUPPORT
// -----------------------------------------------------------------------------
//
//   1. Addition          ( + )    e.g.  10 + 3  =  13
//   2. Subtraction       ( - )    e.g.  10 - 3  =  7
//   3. Multiplication    ( * )    e.g.  10 * 3  =  30
//   4. Division          ( / )    e.g.  10 / 3  =  3.33
//   5. Modulus           ( % )    e.g.  10 % 3  =  1  (remainder)
//   6. Exponentiation    ( ** )   e.g.  2 ** 8  =  256
//   7. Quit
//
// -----------------------------------------------------------------------------
// HOW THE MENU SHOULD LOOK
// -----------------------------------------------------------------------------
//
//   ============================
//        SIMPLE CALCULATOR
//   ============================
//   1. Addition
//   2. Subtraction
//   3. Multiplication
//   4. Division
//   5. Modulus
//   6. Exponentiation
//   7. Quit
//   Select an operation (1-7):
//
// -----------------------------------------------------------------------------
// EXPECTED INTERACTION EXAMPLE
// -----------------------------------------------------------------------------
//
//   Select an operation (1-7): 4
//   Enter first number : 10
//   Enter second number: 3
//   Result: 10 / 3 = 3.33
//
//   Select an operation (1-7): 4
//   Enter first number : 5
//   Enter second number: 0
//   Error: Cannot divide by zero.
//
//   Select an operation (1-7): 7
//   Goodbye!
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Each arithmetic operation MUST be written as its own function.
// - Use a loop so the calculator keeps running until the user selects Quit.
// - Division by zero must be caught and handled with a clear error message
//   (do NOT let the program crash).
// - Display results to 2 decimal places using .toFixed(2).
// - Handle invalid menu choices gracefully.
//

//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================


function add(a, b) {
    return a + b;
}

// Subtraction
function subtract(a, b) {
    return a - b;
}

// Multiplication
function multiply(a, b) {
    return a * b;
}

// Division
function divide(a, b) {
    if (b === 0) {
        return null;
    }

    return a / b;
}

// Modulus
function modulus(a, b) {
    if (b === 0) {
        return null;
    }

    return a % b;
}

// Exponentiation
function exponentiate(a, b) {
    return a ** b;
}

// -----------------------------------------------------------------------------
// Function: displayMenu
// Displays the calculator menu.
// -----------------------------------------------------------------------------
function displayMenu() {
    console.log("\n============================");
    console.log("      SIMPLE CALCULATOR");
    console.log("============================");
    console.log("1. Addition");
    console.log("2. Subtraction");
    console.log("3. Multiplication");
    console.log("4. Division");
    console.log("5. Modulus");
    console.log("6. Exponentiation");
    console.log("7. Quit");
}

// -----------------------------------------------------------------------------
// Main function
// -----------------------------------------------------------------------------
function main() {

    let running = true;

    while (running) {

        displayMenu();

        const choice = readlineSync.questionInt(
            "Select an operation (1-7): "
        );

        // Quit
        if (choice === 7) {
            console.log("Goodbye!");
            running = false;
            continue;
        }

        // Check for invalid choices
        if (choice < 1 || choice > 7) {
            console.log(
                "Error: Invalid choice. Please select a number from 1 to 7."
            );
            continue;
        }

        // Get numbers
        const firstNumber = readlineSync.questionFloat(
            "Enter first number : "
        );

        const secondNumber = readlineSync.questionFloat(
            "Enter second number: "
        );

        let result;
        let operator;

        // Perform selected operation
        switch (choice) {

            case 1:
                result = add(firstNumber, secondNumber);
                operator = "+";
                break;

            case 2:
                result = subtract(firstNumber, secondNumber);
                operator = "-";
                break;

            case 3:
                result = multiply(firstNumber, secondNumber);
                operator = "*";
                break;

            case 4:
                if (secondNumber === 0) {
                    console.log("Error: Cannot divide by zero.");
                    continue;
                }

                result = divide(firstNumber, secondNumber);
                operator = "/";
                break;

            case 5:
                if (secondNumber === 0) {
                    console.log("Error: Cannot calculate modulus by zero.");
                    continue;
                }

                result = modulus(firstNumber, secondNumber);
                operator = "%";
                break;

            case 6:
                result = exponentiate(firstNumber, secondNumber);
                operator = "**";
                break;
        }

        console.log(
            "Result: " +
            firstNumber +
            " " +
            operator +
            " " +
            secondNumber +
            " = " +
            result.toFixed(2)
        );
    }
}

// Start the calculator
main();
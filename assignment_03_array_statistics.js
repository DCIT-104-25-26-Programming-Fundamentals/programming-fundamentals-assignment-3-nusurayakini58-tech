// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 3
// =============================================================================
//
// TASK: Array Statistics Calculator
//
// Write a JavaScript program that reads a collection of numbers from the user
// and computes key statistical values using separate functions.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_03_array_statistics.js
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT / OUTPUT EXAMPLE
// -----------------------------------------------------------------------------
//
//   How many numbers? 5
//   Enter number 1: 4
//   Enter number 2: 7
//   Enter number 3: 2
//   Enter number 4: 9
//   Enter number 5: 1
//
//   Results:
//   Sum:     23
//   Average: 4.6
//   Maximum: 9
//   Minimum: 1
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - You MUST implement each calculation in its own function (see scaffold).
// - You may NOT use JavaScript's built-in array methods like reduce(),
//   Math.max(), or Math.min(). Implement the logic yourself using loops.
// - N must be a positive integer. If the user enters 0 or a negative number,
//   print an error message and stop.
//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================


function calculateSum(numbers) {
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum;
}

// -----------------------------------------------------------------------------
// Function: calculateAverage
// Calculates the average of the numbers in the array.
// -----------------------------------------------------------------------------
function calculateAverage(numbers) {
    const sum = calculateSum(numbers);
    return sum / numbers.length;
}

// -----------------------------------------------------------------------------
// Function: findMaximum
// Finds the largest number in the array.
// -----------------------------------------------------------------------------
function findMaximum(numbers) {
    let maximum = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > maximum) {
            maximum = numbers[i];
        }
    }

    return maximum;
}

// -----------------------------------------------------------------------------
// Function: findMinimum
// Finds the smallest number in the array.
// -----------------------------------------------------------------------------
function findMinimum(numbers) {
    let minimum = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < minimum) {
            minimum = numbers[i];
        }
    }

    return minimum;
}

// -----------------------------------------------------------------------------
// Main function
// -----------------------------------------------------------------------------
function main() {
    const n = readlineSync.questionInt("How many numbers? ");

    // Validate N
    if (n <= 0) {
        console.log("Error: Number of values must be a positive integer.");
        return;
    }

    const numbers = [];

    // Read numbers from the user
    for (let i = 0; i < n; i++) {
        const number = readlineSync.questionFloat("Enter number " + (i + 1) + ": ");
        numbers.push(number);
    }

    // Calculate statistics
    const sum = calculateSum(numbers);
    const average = calculateAverage(numbers);
    const maximum = findMaximum(numbers);
    const minimum = findMinimum(numbers);

    // Display results
    console.log("\nResults:");
    console.log("Sum: " + sum);
    console.log("Average: " + average);
    console.log("Maximum: " + maximum);
    console.log("Minimum: " + minimum);
}

main();




















const userInput = prompt("Enter any number:");
const number = parseInt(userInput);
let primeCount = 0;

if (!isNaN(number)) {
    console.log("Enter any number: " + number);
    console.log("Multiplication table of " + number + ":");

    for (let i = 1; i <= 10; i++) {
        let result = number * i;
        let isPrime = true;

        if (result <= 1) {
            isPrime = false;
        } else {
            for (let j = 2; j < result; j++) {
                if (result % j === 0) {
                    isPrime = false;
                    break;
                }
            }
        }

        if (isPrime) {
            console.log(number + " x " + i + " = " + result + " (prime number)");
            primeCount++;
        } else {
            console.log(number + " x " + i + " = " + result);
        }
    }

    console.log("\nTotal prime numbers in the table: " + primeCount);
} else {
    console.log("Invalid input, please enter a number.");
}
// Generate 5 random 2-digit numbers (10-99)
let numbers = [];
for (let i = 0; i < 5; i++) {
    numbers.push(Math.floor(Math.random() * 90) + 10);
}

// Calculate the sum of the numbers
let sum = numbers.reduce((acc, num) => acc + num, 0);

// Calculate the average
let average = sum / numbers.length;

// Print the numbers, their sum, and the average
console.log("Random 2-digit numbers:", numbers);
console.log("Sum:", sum);
console.log("Average:", average);
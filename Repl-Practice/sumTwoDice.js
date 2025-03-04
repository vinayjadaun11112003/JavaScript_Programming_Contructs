// Generate two random dice numbers (1-6)
let dice1 = Math.floor(Math.random() * 6) + 1;
let dice2 = Math.floor(Math.random() * 6) + 1;

// Calculate the sum of both dice rolls
let sum = dice1 + dice2;

// Print both dice numbers and their sum
console.log("Dice 1:", dice1);
console.log("Dice 2:", dice2);
console.log("Sum of two dice rolls:", sum);
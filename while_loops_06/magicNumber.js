// Magic number game: guess a number between 1 to 100
const prompt = require('prompt-sync')();
let low = 1;
let high = 100;
let found = false;

console.log("Think of a number between 1 to 100!");

while (!found && low <= high) {
    let mid = Math.floor((low + high) / 2);
    let response = prompt(`Is your number ${mid}? (yes/higher/lower): `).toLowerCase();

    if (response === "yes") {
        console.log("Hurray! The magic number is:", mid);
        found = true;
    } else if (response === "higher") {
        low = mid + 1; // Search in the upper half
    } else if (response === "lower") {
        high = mid - 1; // Search in the lower half
    } else {
        console.log("Invalid response. Please type 'yes', 'higher', or 'lower'.");
    }
}
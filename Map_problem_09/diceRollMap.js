// Initialize an empty map to store dice roll counts
let diceRollMap = new Map();

// Function to roll the dice and return a random number between 1 and 6
function rollDie() {
  return Math.floor(Math.random() * 6) + 1; 
}

// Roll dice until any number appears 10 times
while (true) {
  let roll = rollDie(); 

  // Update the count in the map
  if (diceRollMap.has(roll)) {
    // Increment count if key exists
    diceRollMap.set(roll, diceRollMap.get(roll) + 1); 
  } else {
    // Initialize count to 1 if key doesn't exist
    diceRollMap.set(roll, 1); 
  }

  // Check if any value has reached 10 rolls
  if ([...diceRollMap.values()].includes(10)) {
    break; // Stop when any roll count reaches 10
  }
}

console.log("Dice roll counts:", diceRollMap); // Display roll counts

// Find max and min rolled numbers
let maxRoll = [...diceRollMap.entries()].reduce((max, entry) => entry[1] > max[1] ? entry : max);
let minRoll = [...diceRollMap.entries()].reduce((min, entry) => entry[1] < min[1] ? entry : min);

console.log("Number with max rolls:", maxRoll[0], "=> Rolls:", maxRoll[1]);
console.log("Number with min rolls:", minRoll[0], "=> Rolls:", minRoll[1]);
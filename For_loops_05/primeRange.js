// Take two numbers from the command line to define the range
let start = parseInt(process.argv[2]);
let end = parseInt(process.argv[3]);

// Function to check if a number is prime
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Print prime numbers in the given range
console.log("Prime numbers from", start, "to", end, ":");
for (let i = start; i <= end; i++) {
    if (isPrime(i)) console.log(i);
}
// Function to check if a number is prime
function isPrime(num) {
    if (num < 2) return false; // Numbers less than 2 are not prime
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; // If divisible, not prime
    }
    return true; // Prime number
}

// Function to get palindrome of a number
function getPalindrome(num) {
    return parseInt(num.toString().split('').reverse().join('')); // Reverse number
}

// Input from user (command-line argument)
const number = parseInt(process.argv[2]);

if (isPrime(number)) {
    const palindrome = getPalindrome(number);
    console.log(`${number} is a prime number.`);
    if (isPrime(palindrome)) {
        console.log(`Its palindrome ${palindrome} is also a prime number.`);
    } else {
        console.log(`However, its palindrome ${palindrome} is not a prime number.`);
    }
} else {
    console.log(`${number} is not a prime number.`);
}
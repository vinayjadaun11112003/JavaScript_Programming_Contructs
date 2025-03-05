// Function to check if a number is a palindrome
function isPalindrome(num) {
    const strNum = num.toString(); // Convert number to string
    const reversedStr = strNum.split('').reverse().join(''); // Reverse the string
    return strNum === reversedStr; // Check if original equals reversed
}

// Input from user (command-line argument)
const number = parseInt(process.argv[2]);

// Check if the number is a palindrome
console.log(`${number} is ${isPalindrome(number) ? "" : "not "}a palindrome.`);
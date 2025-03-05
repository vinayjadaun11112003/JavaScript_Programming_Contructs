// Take a number (1, 10, 100, etc.) as input from the command line
let number = parseInt(process.argv[2]);

// Determine the place value using switch-case
switch (number) {
    case 1: console.log("Unit"); break;
    case 10: console.log("Ten"); break;
    case 100: console.log("Hundred"); break;
    case 1000: console.log("Thousand"); break;
    default: console.log("Invalid input");
}
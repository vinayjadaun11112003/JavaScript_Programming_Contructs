// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32; // Formula for °C to °F
}

// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9; // Formula for °F to °C
}

// Input from user (command-line arguments)
const conversionType = process.argv[2]; // "CtoF" or "FtoC"
const temperature = parseFloat(process.argv[3]); // Temperature value

if (conversionType === "CtoF") {
    console.log(`${temperature}°C is ${celsiusToFahrenheit(temperature).toFixed(2)}°F`);
} else if (conversionType === "FtoC") {
    console.log(`${temperature}°F is ${fahrenheitToCelsius(temperature).toFixed(2)}°C`);
} else {
    console.log("Invalid conversion type. Use 'CtoF' or 'FtoC'.");
}
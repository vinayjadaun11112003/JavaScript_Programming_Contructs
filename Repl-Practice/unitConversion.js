// Convert 42 inches to feet (1 ft = 12 in)
let inches = 42;
let feet = inches / 12;
console.log("42 inches in feet:", feet);

// Convert rectangular plot (60 ft x 40 ft) to meters (1 ft = 0.3048 m)
let lengthInFeet = 60;
let widthInFeet = 40;
let lengthInMeters = lengthInFeet * 0.3048;
let widthInMeters = widthInFeet * 0.3048;
console.log("Plot size in meters:", lengthInMeters, "x", widthInMeters);

// Calculate area of 25 such plots in acres (1 acre = 4046.86 m²)
let areaOfOnePlot = lengthInMeters * widthInMeters;
let totalAreaInAcres = (areaOfOnePlot * 25) / 4046.86;
console.log("Total area of 25 plots in acres:", totalAreaInAcres);
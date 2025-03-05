// Take a command-line argument 'n' to print powers of 2 up to 2^n or till 256
let n = parseInt(process.argv[2]);
let i = 0;
let result = 1; // 2^0 = 1

console.log("Powers of 2 till 256:");
while (i <= n && result <= 256) {
    console.log("2^" + i + " = " + result);
    result *= 2; // Multiply result by 2 (next power of 2)
    i++;
}
// Take a number N from the command line to find its prime factors
let n = parseInt(process.argv[2]);

// Print prime factors of N
console.log("Prime factors of", n, ":");
for (let i = 2; i * i <= n; i++) {
    while (n % i === 0) {
        console.log(i);
        n /= i;
    }
}
if (n > 1) console.log(n); // If N is a prime number itself
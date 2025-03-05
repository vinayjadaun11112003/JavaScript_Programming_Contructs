// Gambler game: start with Rs 100, goal is Rs 200, bet Rs 1 each time
let money = 100;
const goal = 200;
let bets = 0;
let wins = 0;

while (money > 0 && money < goal) {
    bets++;
    let betResult = Math.floor(Math.random() * 2); // 0 for loss, 1 for win

    if (betResult === 1) {
        money++; // Win Rs 1
        wins++;
    } else {
        money--; // Lose Rs 1
    }
}

console.log("Final amount:", money);
console.log("Total bets made:", bets);
console.log("Total wins:", wins);
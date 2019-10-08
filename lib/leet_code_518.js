// Work through this problem on https://leetcode.com/problems/coin-change-2/ and use the specs given there.
// Feel free to use this file for scratch work.

// var change = function (amount, coins) {
//     let combos = 0; // signifies amount of combinations that allows for amount to be gathered
//     for (let i = coins.length - 1; i >= 0; i--) {
//         if (coins[i] > amount) {
//             continue;
//         } else if (coins[i] === amount) {
//             combos++;
//         } else { // coins[i] < amount
//             let j = i;
//             let sum = coins[j];
//             while (j >= 0) {
//                 if (sum + coins[j] === amount) {
//                     combos++;
//                     sum = coins[i];
//                 } else if (sum + coins[j] < amount) {
//                     sum += coins[j];
//                 } else {
//                     j--;
//                     sum = coins[i];
//                 }
//             }
//         }
//     }
//     return combos;
// };

function change (amount, coins, memo={}) {
    let key = amount + '-' + coins;
    if (key in memo) return memo[key];
    if (amount === 0) return 1;

    let currentCoin = coins[coins.length - 1];

    let total = 0;

    for (let qty = 0; qty * currentCoin <= amount; qty++) {
        total += change(amount - qty * currentCoin, coins.slice(0, -1), memo);
    }

    memo[key] = total;
    return memo[key];
}

console.log(change(5, [1,2,5]));
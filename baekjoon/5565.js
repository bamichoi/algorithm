const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(path).toString().split("\n");

let curCost = 0;

for (let i = 1; i <= input.length - 1; i++) {
  curCost += +input[i];
}

console.log(+input[0] - curCost);

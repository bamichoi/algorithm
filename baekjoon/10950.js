const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(path).toString().split("\n");

const n = input[0];
let ans = "";

for (let i = 1; i <= n; i++) {
  const [a, b] = input[i].split(" ");
  ans += +a + +b + "\n";
}

console.log(ans);

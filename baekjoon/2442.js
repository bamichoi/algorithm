const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(path).toString();

const n = +input;
let ans = "";

for (let i = 1; i <= n; i++) {
  ans += " ".repeat(n - i) + "*".repeat(2 * i - 1) + "\n";
}

console.log(ans);

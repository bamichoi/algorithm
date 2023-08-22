const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(path).toString();

const n = +input;
let ans = "";

for (let i = n; i > 0; i--) {
  ans += " ".repeat(n - i) + "*".repeat(2 * i - 1) + "\n";
}

console.log(ans);

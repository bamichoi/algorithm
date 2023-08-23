const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(path).toString();

const n = +input;
let ans = "";

for (let i = 0; i < n + (n - 1); i++) {
  const a = Math.abs(n - i - 1);
  const b = Math.abs(a - n);
  ans += " ".repeat(a) + "*".repeat(b) + "\n";
}

console.log(ans);

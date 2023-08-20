const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(path).toString();

const n = parseInt(input);
let dp = new Array(91).fill(null);

dp[0] = 0;
dp[1] = 1;

for (let i = 2; i <= n; i++) {
  dp[i] = BigInt(dp[i - 1]) + BigInt(dp[i - 2]);
}

console.log(String(dp[n]));

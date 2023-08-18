const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(path).toString();

const n = parseInt(input);

let ans = 0;
const arr = [0, 1];

for (i = 2; i <= n; i++) {
  const pibo = BigInt(arr[arr.length - 1]) + BigInt(arr[arr.length - 2]);
  arr.push(pibo);
  ans = pibo;
}

console.log(ans);

const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(path).toString();

const n = parseInt(input);

let answer = 0;

for (i = 1; i <= n; i++) {
  answer += i;
}

console.log(answer);

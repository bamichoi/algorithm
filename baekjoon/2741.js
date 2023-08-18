const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(path).toString();

let answer = "";

const n = parseInt(input);

for (let i = 0; i < n; i++) {
  answer += i + 1 + "\n";
}

console.log(answer);

const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(path).toString();

let answer = "";

let n = parseInt(input);

for (let i = n; i != 0; i--) {
  n = i;
  answer += i + "\n";
}

console.log(answer);

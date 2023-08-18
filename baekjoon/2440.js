const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(path).toString();

const n = parseInt(input);

let answer = "";

for (let i = n; i > 0; i--) {
  answer += "*".repeat(i) + "\n";
}

console.log(answer);

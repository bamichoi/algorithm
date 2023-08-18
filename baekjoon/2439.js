const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(path).toString();

let answer = "";
let star = "";

const n = parseInt(input);

for (let i = 1; i <= n; i++) {
  star += "*";
  const space = " ".repeat(n - i);
  answer += space + star + "\n";
}

console.log(answer);

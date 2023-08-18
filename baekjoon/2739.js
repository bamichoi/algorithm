const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(path).toString();

let answer = "";

const n = parseInt(input);

for (let i = 1; i < 10; i++) {
  answer += `${n} * ${i} = ${n * i}` + "\n";
}

console.log(answer);

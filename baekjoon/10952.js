const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(path).toString().split("\n");

let ans = "";

for (let i = 0; i >= 0; i++) {
  const [a, b] = input[i].split(" ");
  if (a === "0" && b === "0") break;
  ans += +a + +b + "\n";
}

console.log(ans);

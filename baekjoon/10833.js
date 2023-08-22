const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(path).toString().split("\n");

const n = input[0];
let ans = 0;

for (let i = 1; i <= n; i++) {
  const [studenti, mele] = input[i].split(" ");
  const melaPerUno = Math.trunc(+mele / +studenti);
  const resto = +mele - melaPerUno * +studenti;
  ans += resto;
}

console.log(ans);

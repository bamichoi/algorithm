const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const stdin = fs.readFileSync(path).toString().split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const t = +input();

for (i = 0; i < t; i++) {
  n = +input();
  let c = 0;
  let g = 0;
  for (j = 0; j < n; j++) {
    const [a, b] = input().split(" ");
    c += +a;
    g += +a * +b;
  }
  console.log(c, (g / c).toFixed(1));
}

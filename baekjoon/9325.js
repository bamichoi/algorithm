const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const stdin = fs.readFileSync(path).toString().split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const t = +input();

for (let i = 0; i < t; i++) {
  let total = 0;

  const car = input();
  total += +car;
  const o = +input();

  for (let j = 0; j < o; j++) {
    const [a, b] = input().split(" ");
    total += +a * +b;
  }
  console.log(total);
}

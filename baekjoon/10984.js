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

// const readline = require("readline");
// const rl = readline.createInterface({
// 	input: process.stdin,
// 	output: process.stdout,
// });

// let input = [];

// rl.on("line", (line) => {
// 	input.push(line);
// });

// rl.on("close", () => {
// 	let ans = [];
//     for (let i = 1; i < input.length; i++) {
//         let len = +input[i];
//         let sum = [0, 0];

//         for (let j = 0; j < len; j++) {
//             let c = input[i+j+1].split(' ').map(v=>+v);
//             sum[0]+=c[0];
//             sum[1]+=c[0]*c[1];
//         }
//         sum[1] = (sum[1]/sum[0]).toFixed(1);

//         ans.push(sum.join(' '))
//         i+=len;
//     }

//     console.log(ans.join('\n'));
// 	process.exit();
// });

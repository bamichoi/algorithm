const fs = require("fs");
const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(path).toString().split(" ");

const getGcd = (a, b) => {
  let gcd = 1;

  for (let i = 2; i <= Math.min(a, b); i++) {
    if (a % i === 0 && b % i === 0) {
      gcd = i;
    }
  }
  return gcd;
};

const getLcm = (a, b) => {
  let lcm = 1;

  while (true) {
    if (lcm % a === 0 && lcm % b === 0) {
      break;
    }
    lcm++;
  }
  return lcm;
};

let gcd;
let lcm;

gcd = getGcd(input[0], input[1]);
lcm = getLcm(input[0], input[1]);

console.log(gcd, lcm);

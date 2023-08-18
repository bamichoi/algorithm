const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().split(" ");

const numA = parseInt(input[0]);
const numB = parseInt(input[1]);

console.log(numA / numB);

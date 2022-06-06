const fs = require("fs");
const lines = fs
  .readFileSync("/var/www/aws/Mahi/textFIles/adcentofcode/adventofcode.com_2021_day_1.txt", { encoding: "utf-8" })
  .split("\n")
  .filter((x) => Boolean(x))
  .map((x) => parseInt(x));

let increased = 0;

for (let i = 1; i < lines.length; i++) {
  const last = lines[i - 1];
  const current = lines[i];
  if (current > last) {
    increased++;
  }
}
console.log(increased);

let increased2 = 0;

for (let i = 3; i < lines.length; i++) {
  const last = lines[i - 1]+lines[i - 2]+lines[i - 3];
  const current = lines[i - 1]+lines[i - 2]+lines[i];
  if (current > last) {
    increased2++;
  }
}
console.log(increased2);
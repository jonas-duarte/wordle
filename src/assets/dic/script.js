const fs = require("fs");

const words = require("./pt-br-5l-words.json");

// const strings = words.map((word) => word.value);

// console.log(strings);

// fs.writeFile("./pt-br-5l-words.txt", strings.join("\r\n"), (err) => {
//   if (err) throw err;
//   console.log("The file has been saved!");
// });

// const FILE = `D:\\Projects\\wordle\\src\\assets\\dic\\formas.totalbr.txt`;
// const lines = fs
//   .readFileSync(FILE, "utf-8")
//   .split("\n")
//   .map((l) => l.split("\t")[1]?.trim());

// const commonWords = lines
//   .filter((l, i) => i < 15000)
//   .filter((l) => l && l.length === 5)
//   // starts with upper case
//   // .forEach((l) => console.log(l));
//   .filter((l) => l[0] === l[0].toLowerCase());

// let i = 0;
// const newWords = words.map((w) => {
//   const word = w.value.toLowerCase();
//   if (commonWords.includes(word)) {
//     console.log(i++);
//     return { ...w, common: true };
//   }
//   return { key: w.key, value: w.value };
// });

// fs.writeFile("./pt-br-5l-words.json", JSON.stringify(newWords), (err) => {
//   if (err) throw err;
//   console.log("The file has been saved!");
// });

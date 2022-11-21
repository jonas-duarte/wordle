const fs = require("fs");

const WORDS_TXT = "D:\\Projects\\wordle\\src\\assets\\dic\\words.txt";
const COMMON_WORDS_TXT = "D:\\Projects\\wordle\\src\\assets\\dic\\common.txt";

const words = fs
  .readFileSync(WORDS_TXT, "utf8")
  .split("\n")
  .filter((word) => word.length === 5)
  .map((word) => word.toLowerCase())
  .filter((word) => word.match(/^[a-z]+$/));
const commonWords = fs
  .readFileSync(COMMON_WORDS_TXT, "utf8")
  .split("\n")
  .filter((word) => word.length === 5);

// {"key":"saber","value":"saber","common":true}
const newWords = words.map((word) => ({
  key: word.toLowerCase(),
  value: word.toLowerCase(),
}));

newWords.forEach((word) => {
  if (commonWords.includes(word.key)) {
    word.common = true;
  }
});

fs.writeFileSync(
  "D:\\Projects\\wordle\\src\\assets\\dic\\en-5l-words.json",
  JSON.stringify(newWords)
);

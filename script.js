for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

let num = 1;
while (num <= 15) {
  if (num % 3 === 0) {
    console.log(num);
  }
  num++;
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let odd of nums) {
  if (odd % 2 !== 0) {
    console.log(odd);
  }
}
// ✏️ Your task: create a new array with only odd numbers

let sentence = "spool era nuf";
let words = sentence.split(" ");

let reversedWords = [];

for (let word of words) {
  let reversed = word.split("").reverse().join("");
  reversedWords.push(reversed);
}
const reversedSentence = reversedWords.join(" ");
console.log(reversedSentence);

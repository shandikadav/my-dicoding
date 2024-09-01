function myFunc(...args) {
  console.log("args:", args);
}

myFunc("a", "b", "c", "d", "e");

function functionTakTerbatas(number, ...numbers) {
  console.log("number:", number);
  console.log(numbers.length);
  console.log("numbers:", numbers);
}

functionTakTerbatas("satu", "dua", "tiga", "empat", "lima");

// rest with descructuring
const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
const [first, second, ...others] = favorites;

console.log("first:", first);
console.log("second:", second);
console.log("others:", others);

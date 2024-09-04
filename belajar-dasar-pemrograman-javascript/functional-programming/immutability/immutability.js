function max(arrayOfNumber) {
  // menggunakan spread operator untuk menduplikasi nillai arrayOfNumber
  return [...arrayOfNumber].sort((a, b) => a - b).pop();
}

function registerEmail(person, email) {
  // menggunakan spread operator untuk menduplikasi nilai person
  return { ...person, email };
}

const numbers = [10, 23, 24, 7, 42, 18];
const largest = max(numbers);

console.log(largest); // 42
console.log(numbers); // [10, 23, 24, 7, 42, 18]

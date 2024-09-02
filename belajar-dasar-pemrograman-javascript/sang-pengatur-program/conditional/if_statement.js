// if statement
const gajian = true;

console.log("Berjalan-jalan di mal");

if (gajian) {
  console.log("Makan di restoran mal");
}
console.log("Pulang ke rumah");

const score = 85;

if (score > 90) {
  console.log("Selamat! Kamu mendapatkan nilai A");
} else if (score > 80) {
  console.log("Nilai kamu B");
} else {
  console.log("Kamu harus belajar lebih giat lagi");
}

// ternary operator
const price = 100000;
const isMember = true;
const discount = isMember ? 0.1 : 0;

console.log(`Anda mendapatkan discount sebesar ${discount * price}`);

// switch case
const fruit = "apple";

switch (fruit) {
  case "banana":
    console.log("aku adalah pisang");
    break;
  case "apple":
    console.log("aku adalah apel");
    break;
  case "orange":
    console.log("aku adalah jeruk");
    break;
  case "mango":
    console.log("aku adalah mangga");
    break;
  default:
    console.log("aku bukan buah, aku adalah programmer.");
}

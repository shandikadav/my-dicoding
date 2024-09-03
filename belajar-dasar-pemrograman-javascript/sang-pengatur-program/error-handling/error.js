const error = new Error("Terjadi error");
console.log(error.message); // Terjadi error

// contoh penggunaan error
const price = 100;
const paid = 80;

if (paid < price) {
  throw new Error("Uang tidak cukup");
}

// penggunaan try-catch

const account = {
  balance: 1000,
  debt: 10,
};

// mengubah nilai properti balance
account.balance = 2000;
console.log(account.balance); // Output: 2000

// menghapus nilai properti debt
delete account.debt;
console.log(account); // Output

const user = {
  name: "Shandika",
  "last name": "Ardiansyah",
  age: 21,
};

// mengakses menggunakan dot notation
console.log(user.name);

// mengakses menggunakan bracket notation
console.log(user["last name"]);

// mengakses menggunakan object destructuring
const { name, age } = user;
console.log(`Halo, nama saya ${name}, saya berusia ${age} tahun.`);

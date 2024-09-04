const user = {
  name: "John",
  email: "john@dicoding.com",
};

// membukan objek user
Object.freeze(user);

// mencoba mengubah properti name pada objek user
user.name = "Doe";
console.log(user);

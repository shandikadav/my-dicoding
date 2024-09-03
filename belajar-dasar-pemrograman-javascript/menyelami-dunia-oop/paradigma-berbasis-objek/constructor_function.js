// membuat object dan class dengan constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.eat = function () {
  console.log(`${this.name} is eating`);
};

const person1 = new Person("Shandika", 21);
const person2 = new Person("Guido", 21);

console.log(person1.name);
console.log(person2.name);

person1.eat();
person2.eat();

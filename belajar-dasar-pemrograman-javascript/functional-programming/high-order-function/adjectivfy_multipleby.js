function adjectivfy(adjective) {
  return function (noun) {
    return `${noun} ${adjective}`;
  };
}

function multipleBy(x) {
  return function (y) {
    return x * y;
  };
}

const coolifier = adjectivfy("keren");
const funnifer = adjectivfy("seru");

const multipleByFive = multipleBy(5);

console.log(coolifier("Dicoding")); // Dicoding keren
console.log(funnifer("Javascript"));
console.log(multipleByFive(7));
console.log(multipleByFive(10));

function sumNumbers(a, b) {
  const result = a + b;
  return result;
}
const result = sumNumbers(2, 4);
console.log("2 + 4:", result);

function convertCelciusToFahrenheit(temperature) {
  const result = (9 / 5) * temperature + 32;
  return result;
}

const temperatureInFahrenheit = convertCelciusToFahrenheit(100);
console.log("100C in Fahrenheit:", temperatureInFahrenheit);

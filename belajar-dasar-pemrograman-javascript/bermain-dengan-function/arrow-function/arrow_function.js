let temperatureInFahrenheit = null;

// Delklarasi function dengan Regular Function
const convertCelciusToFahrenheitUsingRegularFunction = function (temperature) {
  return (temperature * 9) / 5 + 32;
};

temperatureInFahrenheit = convertCelciusToFahrenheitUsingRegularFunction(90);
console.log("Hasil konversi: ", temperatureInFahrenheit);

// Deklarasi function dengan Arrow Function
const convertCelciusToFahrenheitUsingArrowFunction = (temperature) => {
  return (temperature * 9) / 5 + 32;
};

temperatureInFahrenheit = convertCelciusToFahrenheitUsingArrowFunction(90);
console.log("Hasil konversi: ", temperatureInFahrenheit);

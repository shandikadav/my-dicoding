let temperatureInFahrenheit;

// Arrow function
const convertCelsiusToFahrenheit = (temperature) => {
  const result = (9 / 5) * temperature + 32;
  return result;
};

temperatureInFahrenheit = convertCelsiusToFahrenheit(100);
console.log("Hasil konversi:", temperatureInFahrenheit);

// Arrow function versi ringkas
const convertCelciusToFahrenheitInConciseSyntax = (temperature) =>
  (temperature * 9) / 5 + 32;

temperatureInFahrenheit = convertCelciusToFahrenheitInConciseSyntax(100);
console.log("Hasil konversi:", temperatureInFahrenheit);

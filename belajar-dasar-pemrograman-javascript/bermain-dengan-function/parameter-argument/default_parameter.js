convertCelsiusToFahrenheit();
convertCelsiusToFahrenheit(100);

function convertCelsiusToFahrenheit(temperature = 50) {
  const temperatureInFahrenheit = (9 / 5) * temperature + 32;

  console.log("Hasil konversi:", temperatureInFahrenheit);
}

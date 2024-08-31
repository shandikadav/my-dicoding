function convertCelsiusToFahrenheit(temperature) {
  if (temperature !== undefined) {
    // <-- conditional statement
    const temperatureInFahrenheit = (temperature * 9) / 5 + 32;

    console.log("Hasil konversi:", temperatureInFahrenheit);
  }
}

convertCelsiusToFahrenheit(100);

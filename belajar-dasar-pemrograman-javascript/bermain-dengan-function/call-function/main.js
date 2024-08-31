function convertCelciusToFahrenheit(temperature) {
  const temperatureInFahrenheit = (temperature * 9) / 5 + 32;

  console.log(`Hasil konversi:`, temperatureInFahrenheit);
}

const temperatureInCelcius = 90;

//Hanya menampilkan nilai function
console.log(convertCelciusToFahrenheit);

// Akan menjalankan isi function
convertCelciusToFahrenheit(temperatureInCelcius);

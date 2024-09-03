class CoffeeMachine {
  constructor(waterAmount) {
    this.waterAmount = waterAmount;
    this._temperature = 90;
  }

  set temperature(temperature) {
    console.log("you are not allowed to change the temperature");
  }

  get temperature() {
    return this._temperature;
  }
}

const coffee = new CoffeeMachine(10);
console.log("sebelum diubah: ", coffee.temperature);
coffee.temperature = 100;
console.log("setelah diubah: ", coffee.temperature);

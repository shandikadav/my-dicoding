class SmartPhones {
  constructor(color, brand, model) {
    this.color = color;
    this.brand = brand;
    this.model = model;
  }

  charging() {
    console.log(`Charging ${this.model}`);
  }
}

class iOS extends SmartPhones {
  airDrop() {
    console.log(`Transfering file using AirDrop`);
  }
}

class Android extends SmartPhones {
  shareFile() {
    console.log(`Transfering file using ShareIt`);
  }
}

const ios = new iOS("black", "A", "12 Pro Max");
const android = new Android("white", "B", "S21 Ultra");

ios.charging();
ios.airDrop();

android.charging();
android.shareFile();

console.log(ios instanceof SmartPhones);
console.log(android instanceof SmartPhones);

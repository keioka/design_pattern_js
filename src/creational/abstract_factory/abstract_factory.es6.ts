class Car {
  private type: string;
  constructor(type: string) {
    this.type = type;
  }
}
export class CarFactoryManager {
  getFactory(type) {
    if (type === 'Benz') {
      return new BenzFactory();
    } else {
      return new ToyotaFactory();
    }
  }
}

abstract class CarFactory {
  abstract getCar;
}

class BenzFactory extends CarFactory {
  getCar() {
    return new Car('Benz');
  }
}

class ToyotaFactory extends CarFactory {
  getCar() {
    return new Car('Toyota');
  }
}

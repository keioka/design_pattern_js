class Car {
    constructor(type) {
        this.type = type;
    }
}
export class CarFactoryManager {
    getFactory(type) {
        if (type === 'Benz') {
            return new BenzFactory();
        }
        else {
            return new ToyotaFactory();
        }
    }
}
class CarFactory {
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

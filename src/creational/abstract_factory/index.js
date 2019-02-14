import { CarFactoryManager } from './abstract_factory.es6';
(function main() {
    const factory = new CarFactoryManager();
    const benzFactory = factory.getFactory('Benz');
    const car = benzFactory.getCar();
    console.log(car);
})();

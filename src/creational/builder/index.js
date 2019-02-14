const { BasicCarBuilder, LuxuryCarBuilder, Maker } = require('./builder');
(function main() {
    const basicCarBuilder = new BasicCarBuilder();
    const luxuryCarBuilder = new LuxuryCarBuilder();
    const maker = new Maker(basicCarBuilder);
    maker.buildCar('red', 'blue');
    const car = maker.getCar();
    console.log(car);
    const maker2 = new Maker(luxuryCarBuilder);
    maker2.buildCar('black', 'green');
    const car2 = maker2.getCar();
    console.log(car2);
})();

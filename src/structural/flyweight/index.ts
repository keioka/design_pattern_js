import { ShapeFactory, Shape } from './flyweight';

(function main(): void {
  const factory = new ShapeFactory();

  for (let i = 0; i < 20; i++) {
    const circle = factory.getShape('circle');
    const square = factory.getShape('square');

    square.setX(Math.random() * 1000);
    square.setY(Math.random() * 1000);
    square.draw();

    circle.setX(Math.random() * 1000);
    circle.setY(Math.random() * 1000);

    circle.draw();
  }
})();

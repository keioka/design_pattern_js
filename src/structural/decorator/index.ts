import { ConcreteComponent, ConcreteDecorator } from './decorator.es6';

(function main(): void {
  const component = new ConcreteComponent();
  const decorator = new ConcreteDecorator(component);

  console.log(decorator.method1());
  console.log(decorator.method2());
})();

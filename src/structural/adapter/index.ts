import { Adaptee, Adaptor } from './adapter.es6';

(function main(): void {
  const adaptee = new Adaptee();
  const adaptor = new Adaptor(adaptee);
  adaptor.request({ size: 1, weight: 2, count: 3, color: 'red', material: 'metal', length: 2 });
})();

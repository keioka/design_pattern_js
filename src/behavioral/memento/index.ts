import { Originator, CareTaker } from './memento.es6';

(function main(): void {
  // Add state
  const originator = new Originator();
  const careTaker = new CareTaker();
  originator.setState('channel 1');
  careTaker.add(originator.saveToMemento());
  originator.setState('channel 2');
  careTaker.add(originator.saveToMemento());
  originator.setState('channel 3');
  careTaker.add(originator.saveToMemento());
  originator.setState('channel 4');
  console.log(originator.getState());
  console.log('==================');
  // Rollback
  const memento = careTaker.getIndex(0);
  originator.restore(memento);
  console.log(originator.getState());
})();

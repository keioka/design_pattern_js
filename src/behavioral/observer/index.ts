const { Subject, Observer } = require('./observer');

(function main(): void {
  const observer1 = new Observer('1');
  const observer2 = new Observer('2');
  const observer3 = new Observer('3');

  const subject = new Subject();

  subject.addObserver(observer1);
  subject.addObserver(observer2);
  subject.addObserver(observer3);

  subject.notifyObserver('hello');
  subject.notifyObserver('08');
})();

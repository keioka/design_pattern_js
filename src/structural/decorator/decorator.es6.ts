interface Component {
  method1: () => any;
  method2: () => any;
}

export class ConcreteComponent implements Component {
  method1() {
    return 'method1';
  }

  method2() {
    return 'method2';
  }
}

class Decorator implements Component {
  constructor(Component) {
    this.component = Component;
  }

  method1() {
    return this.component.method1();
  }

  method2() {
    return this.component.method2();
  }
}

export class ConcreteDecorator extends Decorator {
  method1() {
    return super.method1() + ': with decorator';
  }
  method2() {
    return super.method2() + ': with decorator';
  }
}

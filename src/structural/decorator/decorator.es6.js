export class ConcreteComponent {
    method1() {
        return 'method1';
    }
    method2() {
        return 'method2';
    }
}
class Decorator {
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

export class Adaptor {
    constructor(adaptee) {
        this.adaptee = adaptee;
    }
    request({ size, weight, count, color, material, length }) {
        this.adaptee.superComplexMethodWithManyParameter(size, weight, count, color, material, length);
    }
}
export class Adaptee {
    superComplexMethodWithManyParameter(size, weight, count, color, material, length) {
        console.log(size, weight, count, color, material, length);
    }
}

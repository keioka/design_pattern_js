export class ShapeFactory {
    constructor() {
        this.shapeMap = {};
    }
    getShape(type) {
        if (this.shapeMap[type]) {
            return this.shapeMap[type];
        }
        const shape = new Shape(type);
        this.shapeMap[type] = shape;
        return shape;
    }
}
export class Shape {
    constructor(type) {
        this.type = type;
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
    setX(x) {
        this.x = x;
    }
    setY(y) {
        this.y = y;
    }
    draw() {
        console.log(`${this.type}: x - ${this.getX()}, y - ${this.getY()}`);
    }
}

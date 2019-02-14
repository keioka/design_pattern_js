export class ShapeFactory {
  
  shapeMap: object = {};
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

  type: string;
  x: number;
  y: number;
  constructor(type) {
    this.type = type;
  }
  getX(): number {
    return this.x;
  }

  getY(): number {
    return this.y;
  }
  setX(x: number) {
    this.x = x;
  }

  setY(y: number) {
    this.y = y;
  }
  draw() {
    console.log(`${this.type}: x - ${this.getX()}, y - ${this.getY()}`)
  }
}

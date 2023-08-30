class Polygon {
  constructor(sides) {
    this.sides = sides;
  }

  get countSides() {
    return this.sides.length;
  }
  get perimeter() {
    return this.sides.reduce((acc, val) => acc + val, 0);
  }
}

class Triangle extends Polygon {
  get isValid() {
    if (this.countSides === 3) {
      if (this.sides[0] === this.sides[1] && this.sides[0] === this.sides[2]) {
        return true;
      } else {
        return false;
      }
    }
    return false;
  }
}

class Square extends Polygon {
  get isValid() {
    if (this.countSides === 4) {
      return this.perimeter % 4 === 0;
    }
  }
  get area() {
    return this.sides[0] * this.sides[1];
  }
}

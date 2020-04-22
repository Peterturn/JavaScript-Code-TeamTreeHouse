class Rectangle {
    constructor(width, length){
        this.width = width;
        this.length = length;
    }
  get area(){
  return this.length * this.width;
  }
}

const rect1 = new Rectangle(10, 5);
const rect2 = new Rectangle(6, 12);
const rect3 = new Rectangle(15, 20);

let areas = [rect1.area, rect2.area, rect3.area]

//Circles
class Circle {

  set radius(r) {
    this._radius = r;
    this.area = 3.14 * Math.pow(r, 2);
    this.circumference = 2 * 3.14 * r;
  }
  get radius() {
    return this._radius;
    }

}

const circ = new Circle(10);

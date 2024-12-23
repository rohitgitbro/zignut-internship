/*
 Task3:WriteaJavaScript program that creates a class called 'Shape' with a method to calculate the area.
 Create two subclasses, 'Circle' and 'Triangle', that inherit from the 'Shape' class and override the area
 calculation method. Create an instance of the 'Circle' class and calculate its area. Similarly, do the same for
 the 'Triangle' class.
*/

class Shape {
    constructor() {
      if (this.constructor === Shape) {
        throw new Error("Cannot instantiate abstract class Shape");
      }
    }
  
    calculateArea() {
      throw new Error("calculateArea method must be implemented");
    }
  }
  
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    calculateArea() {
      return Math.PI * Math.pow(this.radius, 2);
    }
  }
  
  class Triangle extends Shape {
    constructor(base, height) {
      super();
      this.base = base;
      this.height = height;
    }
  
    calculateArea() {
      return 0.5 * this.base * this.height;
    }
  }
  
  const c = new Circle(5);
  console.log(`The area of the circle is: ${c.calculateArea()}`);
  
  const t = new Triangle(4, 3);
  console.log(`The area of the triangle is: ${t.calculateArea()}`);
  

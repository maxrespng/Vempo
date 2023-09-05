import { Controller } from "@hotwired/stimulus"
// import { fill } from "p5"

// Connects to data-controller="load-shapes"
export default class extends Controller {
  static values = {
    shapeInfo: Array,
    projectId: String
  }
  connect() {
    // 1 iterate through all the shapes
    // 2 for each shape, check what the name value of .shape is
    // 3 WITHIN A DRAW FUNCTION:
    // 3.1 if "square", draw square with .start_x, .start_y etc.
    // 3.2 repeat above for other shapes...
    console.log("load-shapes controller connected!");
    const shapeData = this.shapeInfoValue;
    console.log(shapeData);

    if (shapeData) {
    shapeData.forEach((shape) => {
      this.draw(shape.name, shape.start_x, shape.start_y, shape.width, shape.height, shape.color)
      });
    }
    }

  draw(name, start_x, start_y, width, height, color) {
    fill(color);

    if (name === "triangle") {
      triangle(start_x, start_y - 50, width + 100, height, start_x + 200, start_y);
    }
    if (name === "circle") {
      circle(start_x, start_y - 50, width);
    }
    if (name === "square") {
      square(start_x, start_y - 50, width - start_x);
    }
    if (name === "oval") {
      ellipse(start_x, start_y - 50, width - start_x, height - start_y);
    }
    if (name === "rectangle") {
      rect(start_x, start_y - 50, width - start_x, height - start_y);
    }
  }
}

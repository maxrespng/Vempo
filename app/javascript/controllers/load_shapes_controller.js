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
    this.preload();

    if (shapeData) {
      this.draw();
    }
    }

  draw() {
    this.shapeInfoValue.forEach((shape) => {
      // converting string numbers to integers:
      const x1 = parseInt(shape.start_x, 10);
      const y1 = parseInt(shape.start_y, 10);
      const x2 = parseInt(shape.width, 10);
      const y2 = parseInt(shape.height, 10);
      const x3 = parseInt(shape.triangle_x, 10);
      const y3 = parseInt(shape.triangle_y, 10);

      fill(shape.color);
      if (shape.name === "triangle") {
        console.log(x3);
        console.log(y3);
        console.log(shape);
        triangle(x1, y1 - 50, x2 + 100, y2, x3, y3);
      }
      if (shape.name === "circle") {
        circle(x1, y1 - 50, x2 - x1);
      }
      if (shape.name === "square") {
        square(x1, y1 - 50, x2 - x1);
      }
      if (shape.name === "oval") {
        ellipse(x1, y1 - 50, x2 - x1, y2 - y1);
      }
      if (shape.name === "rectangle") {
        rect(x1, y1 - 50, x2 - x1, y2 - y1);
      }
    });
  }

  playMusic(event){
    this.mySound.play()
  }

  preload() {
    soundFormats('mp3', 'ogg');
    this.mySound = loadSound(this.audioFileValue);
  }
}

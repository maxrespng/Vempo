import { Controller } from "@hotwired/stimulus"
// import { fill } from "p5"

// Connects to data-controller="load-shapes"
export default class extends Controller {
  static values = {
    shapeInfo: Array,
    projectId: String,
    musicFile: String
  }
  connect() {
    // 1 iterate through all the shapes
    // 2 for each shape, check what the name value of .shape is
    // 3 WITHIN A DRAW FUNCTION:
    // 3.1 if "square", draw square with .start_x, .start_y etc.
    // 3.2 repeat above for other shapes...
    window.shapeInfoValue = this.shapeInfoValue;
    console.log("load-shapes controller connected!");
    const shapeData = this.shapeInfoValue;
    this.setupMic();

    this.preload();

    console.log("this shapes = ", this.shapeInfoValue);
    if (shapeData) {
      setTimeout(() => {
        this.initialDraw();
      }, 800);
    }
  }

  setupMic() {
    setTimeout(() => {
      window.mic = new p5.AudioIn();
      window.mic.start()
      window.draw = this.draw
    }, 1000);
  }

  initialDraw() {
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

  draw() {
    let vol = (window.mic.getLevel() * 4);

    window.shapeInfoValue.forEach((shape) => {

      const x1 = parseInt(shape.start_x, 10);
      const y1 = parseInt(shape.start_y, 10);
      const x2 = parseInt(shape.width, 10);
      const y2 = parseInt(shape.height, 10);
      const x3 = parseInt(shape.triangle_x, 10);
      const y3 = parseInt(shape.triangle_y, 10);

      let shapeSize = map(vol, 0, 1, 1, 0);
      fill(shape.color);
      if (shape.name === "triangle") {
        triangle(x1 * shapeSize, (y1 - 50) * shapeSize, (x2 + 100) * shapeSize, y2 * shapeSize, x3 * shapeSize, y3 * shapeSize);
      }
      if (shape.name === "circle") {
        circle(x1, y1 - 50, (x2 - x1) * shapeSize);
      }
      if (shape.name === "square") {
        square(x1, y1 - 50, (x2 - x1 * shapeSize));
      }
      if (shape.name === "oval") {
        ellipse(x1, y1 - 50, (x2 - x1) * shapeSize, (y2 - y1) * shapeSize);
      }
      if (shape.name === "rectangle") {
        rect(x1, y1 - 50, (x2 - x1) * shapeSize, (y2 - y1) * shapeSize);
      }
    })
  }

  playMusic(event){
    console.log(this.mySound)
    this.mySound.play();
  }

  preload() {
    soundFormats('mp3', 'ogg');
    this.mySound = loadSound(this.musicFileValue);
  }
}

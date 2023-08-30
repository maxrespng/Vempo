import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    this.createCanvas();
    console.log("connected")
  }

  createCanvas() {
    this.canvas = createCanvas(400, 400);
    this.canvas.parent(this.element);

    // Define tu lógica de p5.js aquí
    background(220);
    fill(0);
    ellipse(width / 2, height / 2, 100, 100);
  }
}

import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="delete-shape"
export default class extends Controller {

  static targets = ["last"]
  connect() {
    this.drawShape(shape);
  }

  undoLastDrawing() {

    console.log('Undo last drawing');
    // Verifica si hay formas en el historial para deshacer

  }

  deleteShape() {
    console.log("triggered delete shape")
    const shapeData = Shape.where()
    findArea(shapeData);
  }

  findArea(shapeData) {
    let area = ''
    if (shapeData.name === "triangle") {
      // area of a triangle calculation
      // 1/2 * (x1(y2 - y3) + x2(y3 - y1) + x3(y1 - y2))
      area = 0.5 * ( shapeData.start_x * (shapeData.height - y3) + shapeData.width * (y3 - shapeData.start_y) + x3(shapeData.start_y - y2))
    }
    if (shapeData.name === "circle") {
      // area of a circle calculation
      // pi * r^2
      area = Math.PI * ((shapeData.width / 2)(shapeData.width / 2))
    }
    if (shapeData.name === "square") {
      // area of a square calculation
      area = shapeData.width * shapeData.width;
    }
    if (shapeData.name === "oval") {
      // area of a oval calculation
    }
    if (shapeData.name === "rectangle") {
      // area of a rectangle calculation
      area = shapeData.width * shapeData.length;
    }
    console.log(area);
    return area;
  }
}
